// src/modules/matterjs-simulation/MatterJsSimulation.tsx
import React, { useEffect, useRef } from "react";
import { Engine, Render, World, Bodies, Runner } from "matter-js"; // Import Matter.js components

interface MatterJsSimulationProps {
  // Define any props needed for the simulation (e.g., size, options)
}

const MatterJsSimulation: React.FC<MatterJsSimulationProps> = () => {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const engineRef = useRef<Engine | null>(null);
  const renderRef = useRef<Render | null>(null);
  const runnerRef = useRef<Runner | null>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    // Create an engine
    const engine = Engine.create();
    engineRef.current = engine;
    const world = engine.world;

    // Create a renderer
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: sceneRef.current.offsetWidth,
        height: sceneRef.current.offsetHeight,
        wireframes: false, // Set to true for wireframe view
        background: "transparent", // Set background to transparent
      },
    });
    renderRef.current = render;

    // Add boundaries
    const wallThickness = 50;
    const walls = [
      Bodies.rectangle(
        render.options.width / 2,
        -wallThickness / 2,
        render.options.width,
        wallThickness,
        { isStatic: true }
      ), // Top wall
      Bodies.rectangle(
        render.options.width / 2,
        render.options.height + wallThickness / 2,
        render.options.width,
        wallThickness,
        { isStatic: true }
      ), // Bottom wall
      Bodies.rectangle(
        -wallThickness / 2,
        render.options.height / 2,
        wallThickness,
        render.options.height,
        { isStatic: true }
      ), // Left wall
      Bodies.rectangle(
        render.options.width + wallThickness / 2,
        render.options.height / 2,
        wallThickness,
        render.options.height,
        { isStatic: true }
      ), // Right wall
    ];
    World.add(world, walls);

    // Add some bouncing balls
    const balls = [];
    for (let i = 0; i < 10; i++) {
      balls.push(
        Bodies.circle(
          Math.random() * render.options.width,
          (Math.random() * render.options.height) / 2,
          20,
          {
            restitution: 0.8, // Bounciness
            render: {
              fillStyle: "#ffffff", // White color for balls
            },
          }
        )
      );
    }
    World.add(world, balls);

    // Run the renderer
    Render.run(render);

    // Create and run the engine runner
    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);

    // Handle window resizing
    const handleResize = () => {
      if (sceneRef.current && renderRef.current) {
        renderRef.current.options.width = sceneRef.current.offsetWidth;
        renderRef.current.options.height = sceneRef.current.offsetHeight;
        Render.setPixelRatio(renderRef.current, window.devicePixelRatio); // Adjust pixel ratio for retina displays

        // Update wall positions based on new dimensions (optional, but good practice)
        // You might need to remove and re-add walls or update their positions
        // For simplicity here, we'll just rely on the initial setup relative to the container size
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to destroy Matter.js instance
    return () => {
      window.removeEventListener("resize", handleResize);
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {}; // Clear textures to prevent memory leaks
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div ref={sceneRef} className="w-full h-full overflow-hidden">
      {/* The Matter.js canvas will be rendered inside this div */}
    </div>
  );
};

export default MatterJsSimulation;
