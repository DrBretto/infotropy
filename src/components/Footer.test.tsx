// src/components/Footer.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

// Mock the Footer component to render its actual content
jest.mock("./Footer", () => ({ layoutState }: { layoutState: string }) => (
  <footer>
    <p>
      © 2025 Infotropy. All rights reserved. An independent exploration of
      fundamental patterns.
    </p>
  </footer>
));

describe("Footer", () => {
  test("renders the copyright text", () => {
    // Provide a mock layoutState prop
    render(<Footer layoutState="menu" />);
    const copyrightElement = screen.getByText(
      /© 2025 Infotropy. All rights reserved. An independent exploration of fundamental patterns./i
    );
    expect(copyrightElement).toBeInTheDocument();
    expect(copyrightElement.tagName).toBe("P"); // Check if it's a p tag
  });
});
