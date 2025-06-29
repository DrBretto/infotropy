// src/modules/matterjs-simulation/MatterJsSimulation.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import MatterJsSimulation from "./MatterJsSimulation";

// Mock Matter.js to prevent actual simulation during tests
jest.mock("matter-js", () => ({
  Engine: {
    create: jest.fn(() => ({ world: {} })),
    clear: jest.fn(), // Add mock for clear function
  },
  Render: {
    create: jest.fn(() => ({
      options: {},
      canvas: { remove: jest.fn() },
      textures: {},
    })),
    run: jest.fn(),
    stop: jest.fn(),
    setPixelRatio: jest.fn(),
  },
  World: { add: jest.fn() },
  Bodies: {
    rectangle: jest.fn(),
    circle: jest.fn(),
  },
  Runner: {
    create: jest.fn(() => ({})),
    run: jest.fn(),
    stop: jest.fn(),
  },
}));

describe("MatterJsSimulation", () => {
  test("renders without crashing", () => {
    const { container } = render(<MatterJsSimulation />);
    // Use querySelector to select the specific div rendered by the component
    const containerElement = container.querySelector(
      ".w-full.h-full.overflow-hidden"
    );
    expect(containerElement).toBeInTheDocument();
  });

  // Add more tests here later, e.g.,
  // test('initializes Matter.js engine and renderer', () => { ... });
  // test('adds boundaries and balls to the world', () => { ... });
  // test('handles window resizing', () => { ... });
  // test('cleans up Matter.js instance on unmount', () => { ... });
});
