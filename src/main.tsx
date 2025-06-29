// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // We will move the App component here
import "./app.css"; // We will move app.css here

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
