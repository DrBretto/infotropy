// src/components/ModuleMenu.tsx
import React from "react";

interface ModuleMenuProps {
  onSelectModule: (moduleName: string) => void;
}

const ModuleMenu: React.FC<ModuleMenuProps> = ({ onSelectModule }) => {
  // Placeholder list of modules - will be expanded later
  const modules = [
    { name: "Matter.js Simulation", id: "matterjs-simulation" },
    { name: "Maxwell's Demon", id: "maxwells-demon" }, // Added Maxwell's Demon module
    // Add future modules here
  ];

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-xl font-bold text-gray-200">Explore Simulations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {modules.map((module) => (
          <button
            key={module.id}
            onClick={() => onSelectModule(module.id)}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md shadow-lg transition duration-200 ease-in-out"
          >
            {module.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ModuleMenu;
