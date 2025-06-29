// src/components/ChatBoxPlaceholder.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import ChatBoxPlaceholder from "./ChatBoxPlaceholder";

describe("ChatBoxPlaceholder", () => {
  test("renders the placeholder text", () => {
    render(<ChatBoxPlaceholder />);
    const placeholderText = screen.getByText(/Chat box placeholder/i);
    expect(placeholderText).toBeInTheDocument();
  });
});
