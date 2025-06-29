// src/components/ChatBoxPlaceholder.tsx
import React from "react";

const ChatBoxPlaceholder: React.FC = () => {
  return (
    // Apply styling for the chat box placeholder - remove explicit text color
    <div className="w-full border-t-2 border-green-500 p-4">
      {" "}
      {/* Removed text-green-400 */}
      {/* Placeholder text for the chat box */}
      Chat box placeholder (LLM interaction/navigation here)
    </div>
  );
};

export default ChatBoxPlaceholder;
