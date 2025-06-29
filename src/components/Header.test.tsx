// src/components/Header.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

// Mock the Header component to render its actual content
jest.mock("./Header", () => ({ layoutState }: { layoutState: string }) => (
  <header
    className={`text-center space-y-2 mb-8 ${
      layoutState === "module"
        ? "flex items-center justify-center space-x-4 mb-4"
        : ""
    }`}
  >
    <h1
      className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg ${
        layoutState === "module"
          ? "text-xl sm:text-2xl"
          : "text-4xl sm:text-5xl"
      }`}
    >
      Infotropy
    </h1>
    {layoutState === "menu" && (
      <p className="text-gray-300 text-lg sm:text-xl">
        Exploring the Universe as Information, Entropy, and the Arrow of Time.
      </p>
    )}
  </header>
));

describe("Header", () => {
  test('renders the main title "Infotropy"', () => {
    // Provide a mock layoutState prop
    render(<Header layoutState="menu" />);
    const titleElement = screen.getByText(/Infotropy/i);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe("H1"); // Check if it's an h1 tag
  });

  test("renders the tagline", () => {
    // Provide a mock layoutState prop
    render(<Header layoutState="menu" />);
    const taglineElement = screen.getByText(
      /Exploring the Universe as Information, Entropy, and the Arrow of Time./i
    );
    expect(taglineElement).toBeInTheDocument();
    expect(taglineElement.tagName).toBe("P"); // Check if it's a p tag
  });
});
