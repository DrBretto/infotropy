import { render, screen, act } from "@testing-library/react";
import MaxwellsDemon from "./MaxwellsDemon";
import Matter from "matter-js";

// Define a type for the mock body that includes necessary properties
interface MockBody extends Matter.Body {
  label: string;
  position: { x: number; y: number };
  isStatic: boolean;
  id: number;
  // Add other properties as needed by the component's logic
  // For now, only label and position are strictly needed for the tests written
}

// Create a mock Body object with necessary properties
const createMockBody = (
  x: number,
  y: number,
  label: string,
  isStatic: boolean = false
): MockBody =>
  ({
    id: Math.random(), // Add a unique ID
    type: "body", // Add type
    label,
    isStatic,
    position: { x, y },
    // Add other minimal properties required by Matter.js or component logic
    angle: 0,
    velocity: { x: 0, y: 0 },
    angularVelocity: 0,
    speed: 0,
    angularSpeed: 0,
    mass: isStatic ? Infinity : 1,
    density: isStatic ? Infinity : 0.001,
    inertia: isStatic ? Infinity : 1,
    restitution: 1,
    friction: 0,
    frictionStatic: 0,
    frictionAir: 0,
    force: { x: 0, y: 0 },
    torque: 0,
    bounds: { min: { x: x - 1, y: y - 1 }, max: { x: x + 1, y: y + 1 } }, // Minimal bounds
    parts: [], // Add parts array
    plugin: { name: "mock-plugin", version: "1.0.0", install: jest.fn() }, // Add plugin object with minimal properties
    collisionFilter: { group: 0, category: 1, mask: 2 }, // Add collisionFilter
    densityMultiplier: 1, // Add densityMultiplier
    events: {}, // Add events object
    isSensor: false, // Add isSensor
    isSleeping: false, // Add isSleeping
    motion: 0, // Add motion
    sleepThreshold: 60, // Add sleepThreshold
    timeScale: 1, // Add timeScale
    circleRadius: label === "ball" ? 10 : undefined, // Add circleRadius for balls
    area: label === "ball" ? Math.PI * 10 * 10 : 100, // Example area
    parent: null, // Add parent
    axes: [
      { x: 1, y: 0 },
      { x: 0, y: 1 },
    ], // Add axes
    vertices: [
      { x: x - 1, y: y - 1 },
      { x: x + 1, y: y - 1 },
      { x: x + 1, y: y + 1 },
      { x: x - 1, y: y + 1 },
    ], // Minimal vertices
    positionImpulse: { x: 0, y: 0 }, // Add positionImpulse
    constraintImpulse: { x: 0, y: 0, angular: 0 }, // Add constraintImpulse
    totalContacts: 0, // Add totalContacts
    angularSeparation: 0, // Add angularSeparation
    render: {
      fillStyle: "#ffffff",
      strokeStyle: "#000000",
      lineWidth: 1,
      visible: true,
    }, // Add render property
    inverseInertia: 1, // Add inverseInertia
    inverseMass: 1, // Add inverseMass
    slop: 0.05, // Add slop
  } as MockBody); // Cast to MockBody

// Mock Matter.js
jest.mock("matter-js", () => {
  // Define a type for the mock world that uses MockBody
  interface MockWorld extends Matter.World {
    bodies: MockBody[];
    isPaused: boolean; // Add isPaused property
  }

  const mockWorld: MockWorld = {
    gravity: { x: 0, y: 0, scale: 0 }, // Add scale to gravity
    bodies: [], // This will be manipulated in tests
    // Add other minimal world properties if needed
    bounds: { min: { x: 0, y: 0 }, max: { x: 100, y: 100 } }, // Minimal bounds
    id: 0, // Add id
    isPaused: false, // Add isPaused
    options: {}, // Add options
    plugin: { name: "mock-plugin", version: "1.0.0", install: jest.fn() }, // Add plugin
    engine: {} as Matter.Engine, // Add engine
  };

  const mockEngine = {
    world: mockWorld,
    // Add other engine properties/methods if accessed by the component
    timing: { timestamp: 0, lastDelta: 0, lastElapsed: 0, timeScale: 1 }, // Add timing
    broadphase: {
      controller: {},
      detector: { bodies: [], pairs: [] }, // Add bodies and pairs to detector
      pairs: { table: {} },
      bucketWidth: 100,
      bucketHeight: 100,
    } as Matter.Grid, // Add broadphase with minimal properties and cast
    constraintIterations: 0, // Add constraintIterations
    enabled: true, // Add enabled
    enableSleeping: false, // Add enableSleeping
    events: {}, // Add events
    grid: { bucketWidth: 100, bucketHeight: 100 } as Matter.Grid, // Add grid with minimal properties and cast
    metrics: {}, // Add metrics
    plugin: { name: "mock-plugin", version: "1.0.0", install: jest.fn() }, // Add plugin
    positionIterations: 0, // Add positionIterations
    solver: {}, // Add solver
    velocityIterations: 0, // Add velocityIterations
    detector: { bodies: [], pairs: [] } as Matter.Detector, // Add detector with minimal properties and cast
    gravity: mockWorld.gravity, // Add gravity property
    pairs: { list: [] }, // Add pairs property
    render: {} as Matter.Render, // Add render property
  } as Matter.Engine; // Cast to Matter.Engine

  const mockRender = {
    canvas: {
      remove: jest.fn(),
      getContext: jest.fn(() => ({})),
      style: {},
      height: 600,
      width: 800,
    } as HTMLCanvasElement, // Mock canvas as HTMLCanvasElement with getContext, style, height, and width
    textures: {},
    // Add other render properties/methods if accessed
    controller: {}, // Add controller
    element: document.createElement("canvas"), // Mock element as HTMLElement
    options: {}, // Add options
    bounds: { min: { x: 0, y: 0 }, max: { x: 100, y: 100 } }, // Add bounds
    engine: mockEngine, // Add engine
    mapping: {}, // Add mapping
    context: {} as CanvasRenderingContext2D, // Mock context as CanvasRenderingContext2D
    mouse: {
      element: document.createElement("canvas"), // Mock element as HTMLElement
      absolute: { x: 0, y: 0 },
      position: { x: 0, y: 0 },
      mousedownPosition: { x: 0, y: 0 },
      mouseupPosition: { x: 0, y: 0 },
      wheel: { x: 0, y: 0 },
      changed: false,
      button: -1,
      buttons: 0,
      sourceEvents: [],
      constrain: jest.fn(),
      offset: { x: 0, y: 0 }, // Add offset
      scale: { x: 1, y: 1 }, // Add scale
      wheelDelta: 0, // Add wheelDelta
      pixelRatio: 1, // Add pixelRatio
    } as Matter.Mouse, // Mock mouse with minimal properties and cast
  } as Matter.Render; // Cast to Matter.Render

  const mockRunner = {
    // Add runner properties/methods if accessed
    enabled: true, // Add enabled
    delta: 16.666, // Add delta
    inbound: null, // Add inbound
    isFixed: false, // Add isFixed
    options: {}, // Add options
    outbound: null, // Add outbound
    plugin: { name: "mock-plugin", version: "1.0.0", install: jest.fn() }, // Add plugin
    timeScale: 1, // Add timeScale
    tick: jest.fn(), // Add tick
  } as Matter.Runner; // Cast to Matter.Runner

  const mockEvents = {
    on: jest.fn(),
    off: jest.fn(),
  };

  return {
    Engine: {
      create: jest.fn(() => mockEngine),
      clear: jest.fn(),
    },
    Render: {
      create: jest.fn(() => mockRender),
      run: jest.fn(),
      stop: jest.fn(),
    },
    World: {
      add: jest.fn(
        (world: Matter.World, bodies: Matter.Body | Matter.Body[]) => {
          // Simulate adding bodies to the mock world
          const bodiesArray = Array.isArray(bodies) ? bodies : [bodies];
          mockWorld.bodies.push(...(bodiesArray as MockBody[])); // Cast to MockBody[]
        }
      ),
      clear: jest.fn((world: Matter.World, keepStatic: boolean) => {
        // Simulate clearing the world
        if (keepStatic) {
          mockWorld.bodies = mockWorld.bodies.filter((body) => body.isStatic);
        } else {
          mockWorld.bodies = [];
        }
      }),
      remove: jest.fn(
        (world: Matter.World, bodies: Matter.Body | Matter.Body[]) => {
          // Simulate removing bodies from the mock world
          const bodiesArray = Array.isArray(bodies) ? bodies : [bodies];
          mockWorld.bodies = mockWorld.bodies.filter(
            (body) => !bodiesArray.some((b) => b.id === body.id)
          );
        }
      ),
    },
    Bodies: {
      rectangle: jest.fn((x, y, w, h, options) =>
        createMockBody(x, y, options?.label || "static", true)
      ),
      circle: jest.fn((x, y, r, options) =>
        createMockBody(x, y, options?.label || "ball", false)
      ),
    },
    Runner: {
      create: jest.fn(() => mockRunner),
      run: jest.fn(),
      stop: jest.fn(),
    },
    Events: mockEvents, // Use the mockEvents object
  };
});

describe("MaxwellsDemon", () => {
  let mockEventsOn: jest.Mock;
  let mockWorldAdd: jest.Mock;
  let mockWorldRemove: jest.Mock;
  let mockEngineInstance: Matter.Engine;

  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
    mockEventsOn = Matter.Events.on as jest.Mock;
    mockWorldAdd = Matter.World.add as jest.Mock;
    mockWorldRemove = Matter.World.remove as jest.Mock;

    // Mock canvas dimensions
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
      configurable: true,
      value: 800,
    });
    Object.defineProperty(HTMLElement.prototype, "offsetHeight", {
      configurable: true,
      value: 600,
    });

    // Get the mock engine instance created by the component
    // Render the component first to trigger the useEffect where the engine is created
    render(<MaxwellsDemon />);
    mockEngineInstance = (Matter.Engine.create as jest.Mock).mock.results[0]
      .value;
  });

  afterEach(() => {
    // Clean up mocked canvas dimensions
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
      configurable: true,
      value: 0,
    });
    Object.defineProperty(HTMLElement.prototype, "offsetHeight", {
      configurable: true,
      value: 0,
    });
  });

  test("renders the canvas element", () => {
    const canvasElement = screen.getByRole("canvas");
    expect(canvasElement).toBeInTheDocument();
  });

  test("increments ball bounce count on collision between two balls", () => {
    // Find the collisionStart event handler that was registered
    const collisionStartHandler = mockEventsOn.mock.calls.find(
      (call) => call[1] === "collisionStart"
    )[2];

    // Simulate a collision event between two balls
    act(() => {
      collisionStartHandler({
        pairs: [{ bodyA: { label: "ball" }, bodyB: { label: "ball" } }],
      });
    });

    // Check if the bounce count is displayed and is 1
    expect(screen.getByText(/Ball Bounces: 1/i)).toBeInTheDocument();

    // Simulate another collision
    act(() => {
      collisionStartHandler({
        pairs: [{ bodyA: { label: "ball" }, bodyB: { label: "ball" } }],
      });
    });

    // Check if the bounce count is now 2
    expect(screen.getByText(/Ball Bounces: 2/i)).toBeInTheDocument();
  });

  test("does not increment ball bounce count on collision with non-ball body", () => {
    const collisionStartHandler = mockEventsOn.mock.calls.find(
      (call) => call[1] === "collisionStart"
    )[2];

    // Simulate a collision between a ball and a static body
    act(() => {
      collisionStartHandler({
        pairs: [{ bodyA: { label: "ball" }, bodyB: { label: "static" } }],
      });
    });

    // Check that the bounce count is still 0
    expect(screen.getByText(/Ball Bounces: 0/i)).toBeInTheDocument();
  });

  test("updates background color based on ball distribution", () => {
    const mockAfterUpdateHandler = mockEventsOn.mock.calls.find(
      (call) => call[1] === "afterUpdate"
    )[2];

    // Get the background elements
    const leftBackground = screen.getByTestId("left-background");
    const rightBackground = screen.getByTestId("right-background");

    // Simulate balls on the left side (2 left, 0 right)
    mockEngineInstance.world.bodies = [
      createMockBody(100, 100, "ball"), // Left (canvas width 800, barrier at 400)
      createMockBody(150, 100, "ball"), // Left
    ];
    act(() => {
      mockAfterUpdateHandler();
    });

    // For 2 balls on left, 0 on right, imbalanceRatio = 2/2 = 1.0
    // Left should be red, right should be blue (full intensity)
    expect(leftBackground).toHaveStyle("background-color: rgb(255, 0, 0)"); // Assuming pure red for max imbalance
    expect(rightBackground).toHaveStyle("background-color: rgb(0, 0, 255)"); // Assuming pure blue for max imbalance

    // Simulate equal distribution (1 left, 1 right)
    mockEngineInstance.world.bodies = [
      createMockBody(100, 100, "ball"), // Left
      createMockBody(500, 100, "ball"), // Right
    ];
    act(() => {
      mockAfterUpdateHandler();
    });

    // For 1 ball on left, 1 on right, imbalanceRatio = 0/2 = 0.0
    // Both should be black
    expect(leftBackground).toHaveStyle("background-color: rgb(0, 0, 0)");
    expect(rightBackground).toHaveStyle("background-color: rgb(0, 0, 0)");

    // Simulate imbalance on the right (0 left, 2 right)
    mockEngineInstance.world.bodies = [
      createMockBody(500, 100, "ball"), // Right
      createMockBody(550, 100, "ball"), // Right
    ];
    act(() => {
      mockAfterUpdateHandler();
    });

    // For 0 balls on left, 2 on right, imbalanceRatio = 2/2 = 1.0
    // Right should be red, left should be blue (full intensity)
    expect(rightBackground).toHaveStyle("background-color: rgb(255, 0, 0)");
    expect(leftBackground).toHaveStyle("background-color: rgb(0, 0, 255)");
  });

  test("toggles the door state and updates Matter.js world on button click", () => {
    const doorButton = screen.getByRole("button", {
      name: /Open Door|Close Door/i,
    });

    // Initially, the door should be closed, so the button text should be "Open Door"
    expect(doorButton).toHaveTextContent("Open Door");
    // And the door should have been added to the world initially (check mock calls)
    expect(mockWorldAdd).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({ label: "door" })
    );
    expect(mockWorldRemove).not.toHaveBeenCalled(); // Should not have been removed yet

    // Click the button to open the door
    act(() => {
      doorButton.click();
    });

    // Button text should change to "Close Door"
    expect(doorButton).toHaveTextContent("Close Door");
    // The door should have been removed from the world
    expect(mockWorldRemove).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({ label: "door" })
    );
    // World.add should not have been called again
    expect(mockWorldAdd).toHaveBeenCalledTimes(1); // Called once during initial setup

    // Click the button again to close the door
    act(() => {
      doorButton.click();
    });

    // Button text should change back to "Open Door"
    expect(doorButton).toHaveTextContent("Open Door");
    // The door should have been added back to the world
    expect(mockWorldAdd).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({ label: "door" })
    );
    // World.remove should have been called once
    expect(mockWorldRemove).toHaveBeenCalledTimes(1); // Called once when opening the door
    // World.add should have been called twice now (initial + closing)
    expect(mockWorldAdd).toHaveBeenCalledTimes(2);
  });
});
