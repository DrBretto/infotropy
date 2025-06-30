import React, { useRef, useEffect, useState, useCallback } from "react";
import Matter from "matter-js";
import { motion } from "framer-motion"; // Import motion

const MaxwellsDemon: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const doorRef = useRef<Matter.Body | null>(null); // Ref to store the door body

  const [ballBounceCount, setBallBounceCount] = useState(0);
  const [leftSideCount, setLeftSideCount] = useState(0);
  const [rightSideCount, setRightSideCount] = useState(0);
  const [isDoorOpen, setIsDoorOpen] = useState(false); // Initially closed

  const [leftBackgroundStyle, setLeftBackgroundStyle] =
    useState<React.CSSProperties>({});
  const [rightBackgroundStyle, setRightBackgroundStyle] =
    useState<React.CSSProperties>({});

  // Function to toggle the door state
  const toggleDoor = useCallback(() => {
    setIsDoorOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas?.parentElement; // Get the parent container
    if (!canvas || !container) return;

    const {
      Engine,
      Render,
      World,
      Bodies,
      Runner,
      Events,
      Body,
      Mouse,
      MouseConstraint,
      Query, // Import Query
    } = Matter; // Import Mouse and MouseConstraint

    // Create engine
    const engine = Engine.create();
    engineRef.current = engine;

    // Disable gravity
    engine.world.gravity.y = 0;
    engine.world.gravity.x = 0;

    // Create renderer
    const render = Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        width: container.offsetWidth, // Use container dimensions
        height: container.offsetHeight, // Use container dimensions
        wireframes: false, // Use filled shapes
        background: "transparent", // Use CSS for background
        pixelRatio: window.devicePixelRatio,
      },
    });
    renderRef.current = render;

    // Run the renderer
    Render.run(render);

    // Create runner
    const runner = Runner.create();

    // Run the engine
    Runner.run(runner, engine);

    // Create arena walls
    const wallThickness = 20;
    const walls = [
      // Top wall
      Bodies.rectangle(
        container.offsetWidth / 2, // Use container dimensions
        wallThickness / 2,
        container.offsetWidth, // Use container dimensions
        wallThickness,
        { isStatic: true }
      ),
      // Bottom wall
      Bodies.rectangle(
        container.offsetWidth / 2, // Use container dimensions
        container.offsetHeight - wallThickness / 2, // Use container dimensions
        container.offsetWidth, // Use container dimensions
        wallThickness,
        { isStatic: true }
      ),
      // Left wall
      Bodies.rectangle(
        wallThickness / 2,
        container.offsetHeight / 2, // Use container dimensions
        wallThickness,
        container.offsetHeight, // Use container dimensions
        { isStatic: true }
      ),
      // Right wall
      Bodies.rectangle(
        container.offsetWidth - wallThickness / 2, // Use container dimensions
        container.offsetHeight / 2, // Use container dimensions
        wallThickness,
        container.offsetHeight, // Use container dimensions
        { isStatic: true }
      ),
    ];

    // Create central barrier
    const barrierThickness = 20;
    const centralBarrierX = container.offsetWidth / 2; // Use container dimensions
    const centralBarrier = Bodies.rectangle(
      centralBarrierX,
      container.offsetHeight / 2, // Use container dimensions
      barrierThickness,
      container.offsetHeight, // Use container dimensions
      { isStatic: true }
    );

    // Create the door
    const doorWidth = barrierThickness;
    const doorHeight = 100 * 2.5; // Increased door height
    const door = Bodies.rectangle(
      container.offsetWidth / 2, // Use container dimensions
      container.offsetHeight / 2, // Use container dimensions
      doorWidth,
      doorHeight,
      { isStatic: true, label: "door", render: { fillStyle: "#888888" } } // Add a label and render style to identify the door
    );
    doorRef.current = door;

    // Create balls
    const numberOfBalls = 20;
    const ballRadius = 10;
    const initialSpeed = 10; // Doubled initial speed
    const balls = [];
    for (let i = 0; i < numberOfBalls; i++) {
      const x =
        Math.random() * (container.offsetWidth - 2 * wallThickness) + // Use container dimensions
        wallThickness;
      const y =
        Math.random() * (container.offsetHeight - 2 * wallThickness) + // Use container dimensions
        wallThickness;
      const ball = Bodies.circle(x, y, ballRadius, {
        restitution: 1,
        friction: 0,
        frictionAir: 0,
        label: "ball", // Add 'ball' label
        render: {
          fillStyle: "#ffffff", // Set ball color to white
        },
      });
      // Add initial random velocity
      Body.setVelocity(ball, {
        x: (Math.random() - 0.5) * initialSpeed, // Random velocity between -initialSpeed/2 and initialSpeed/2
        y: (Math.random() - 0.5) * initialSpeed, // Random velocity between -initialSpeed/2 and initialSpeed/2
      });
      balls.push(ball);
    }

    // Add walls, barrier, and balls to the world initially
    World.add(engine.world, [...walls, centralBarrier, ...balls]);

    // Add the door if it should be initially closed (which it is)
    if (!isDoorOpen) {
      World.add(engine.world, door);
    }

    // Add mouse control for clicking
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    World.add(engine.world, mouseConstraint);

    // Enable mouse interaction on the render
    render.mouse = mouse;

    // Collision detection for ball bounces
    Events.on(engine, "collisionStart", (event) => {
      const pairs = event.pairs;
      pairs.forEach((pair) => {
        const { bodyA, bodyB } = pair;

        // Check if both bodies are balls (already implemented)
        if (bodyA.label === "ball" && bodyB.label === "ball") {
          setBallBounceCount((prevCount) => prevCount + 1);
        }
      });
    });

    // Click detection on the door
    Events.on(mouseConstraint, "mousedown", (event) => {
      const mousePoint = event.mouse.position;
      // Use Query.point to find bodies at the mouse position
      const clickedBodies = Query.point(engine.world.bodies, mousePoint);

      // Check if the clicked body is the door
      if (clickedBodies.some((body) => body.label === "door")) {
        toggleDoor();
      }
    });

    // Track ball positions and update counts
    Events.on(engine, "afterUpdate", () => {
      let leftCount = 0;
      let rightCount = 0;
      engine.world.bodies.forEach((body) => {
        if (body.label === "ball") {
          if (body.position.x < centralBarrierX) {
            leftCount++;
          } else {
            rightCount++;
          }
        }
      });
      setLeftSideCount(leftCount);
      setRightSideCount(rightCount);
    });

    // Cleanup function
    return () => {
      Render.stop(render);
      Engine.clear(engine);
      World.clear(engine.world, false);
      Runner.stop(runner);
      render.canvas.remove();
      render.textures = {}; // Clear textures to prevent memory leaks
    };
  }, [isDoorOpen, toggleDoor]); // Add isDoorOpen and toggleDoor to dependencies

  // Effect to update background color based on ball counts
  useEffect(() => {
    const totalBalls = leftSideCount + rightSideCount;
    if (totalBalls === 0) {
      setLeftBackgroundStyle({ backgroundColor: "rgba(0, 0, 0, 0)" });
      setRightBackgroundStyle({ backgroundColor: "rgba(0, 0, 0, 0)" });
      return;
    }

    const maxImbalance = totalBalls; // Max difference is when all balls are on one side
    const currentImbalance = Math.abs(leftSideCount - rightSideCount);
    const imbalanceRatio = currentImbalance / maxImbalance;

    // Dark mode friendly colors (adjust as needed)
    const redColor = [255, 0, 0]; // Pure red
    const blueColor = [0, 0, 255]; // Pure blue
    const blackColor = [0, 0, 0]; // Black

    // Calculate opacity based on imbalance ratio (0 for equal, 1 for max imbalance)
    const opacity = imbalanceRatio;

    if (leftSideCount > rightSideCount) {
      // Left side has more balls (red), Right side has fewer (blue)
      setLeftBackgroundStyle({
        backgroundColor: `rgba(${redColor[0]}, ${redColor[1]}, ${redColor[2]}, ${opacity})`,
      });
      setRightBackgroundStyle({
        backgroundColor: `rgba(${blueColor[0]}, ${blueColor[1]}, ${blueColor[2]}, ${opacity})`,
      });
    } else if (rightSideCount > leftSideCount) {
      // Right side has more balls (red), Left side has fewer (blue)
      setRightBackgroundStyle({
        backgroundColor: `rgba(${redColor[0]}, ${redColor[1]}, ${redColor[2]}, ${opacity})`,
      });
      setLeftBackgroundStyle({
        backgroundColor: `rgba(${blueColor[0]}, ${blueColor[1]}, ${blueColor[2]}, ${opacity})`,
      });
    } else {
      // Equal distribution (black with 0 opacity)
      setLeftBackgroundStyle({ backgroundColor: "rgba(0, 0, 0, 0)" });
      setRightBackgroundStyle({ backgroundColor: "rgba(0, 0, 0, 0)" });
    }
  }, [leftSideCount, rightSideCount]); // Rerun effect when counts change

  // Resize handling will be added later

  return (
    <motion.div
      className="relative w-full h-full overflow-hidden" // Added overflow-hidden
      initial={{ opacity: 0 }} // Initial animation state
      animate={{ opacity: 1 }} // Animation to state
      exit={{ opacity: 0 }} // Animation on exit
      transition={{ duration: 0.5 }} // Animation duration
    >
      {/* Background shading elements */}
      <div
        className="absolute top-0 bottom-0 left-0 w-1/2"
        style={leftBackgroundStyle}
        data-testid="left-background" // Add data-testid for testing
      ></div>
      <div
        className="absolute top-0 bottom-0 right-0 w-1/2"
        style={rightBackgroundStyle}
        data-testid="right-background" // Add data-testid for testing
      ></div>
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
      {/* UI elements (button, bounce count) */}
      <div className="absolute top-4 left-4 z-10 text-green-400">
        {" "}
        {/* Adjusted positioning */}
        <p>Ball Bounces: {ballBounceCount}</p>
        <p>Left Side: {leftSideCount}</p>
        <p>Right Side: {rightSideCount}</p>
        {/* Removed door toggle button */}
      </div>
    </motion.div>
  );
};

export default MaxwellsDemon;
