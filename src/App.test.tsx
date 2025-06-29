// src/App.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DescriptionSection from "./components/DescriptionSection";
import CentralContentWindow from "./components/CentralContentWindow";
import NavigationButtons from "./components/NavigationButtons";

// Mock the child components to simplify testing of App's structure
jest.mock("./components/Header", () => () => <div>Mock Header</div>);
jest.mock(
  "./components/Footer",
  () =>
    ({ layoutState }: { layoutState: string }) =>
      (
        // Render simple placeholder text
        <div>Mock Footer</div>
      )
);
jest.mock(
  "./components/DescriptionSection",
  () =>
    ({
      activeModule,
      layoutState,
    }: {
      activeModule: string | null;
      layoutState: string;
    }) => {
      // Render simple placeholder text
      return <div>Mock Description Section</div>;
    }
);
jest.mock(
  "./components/CentralContentWindow",
  () =>
    ({ layoutState }: { layoutState: string }) =>
      <div>Mock Central Content Window</div>
);
jest.mock(
  "./components/NavigationButtons",
  () =>
    ({ layoutState }: { layoutState: string }) =>
      <div>Mock Navigation Buttons</div>
);

describe("App", () => {
  test("renders without crashing", () => {
    render(<App />);
    // If it renders without throwing an error, this test passes
  });

  test("renders the Header component", () => {
    render(<App />);
    expect(screen.getByText("Mock Header")).toBeInTheDocument();
  });

  test("renders the DescriptionSection component", () => {
    render(<App />);
    expect(screen.getByText("Mock Description Section")).toBeInTheDocument();
  });

  test("renders the CentralContentWindow component", () => {
    render(<App />);
    expect(screen.getByText("Mock Central Content Window")).toBeInTheDocument();
  });

  test("renders the NavigationButtons component", () => {
    render(<App />);
    expect(screen.getByText("Mock Navigation Buttons")).toBeInTheDocument();
  });

  test("renders the Footer component", () => {
    render(<App />);
    expect(screen.getByText("Mock Footer")).toBeInTheDocument();
  });
});
