// jest.config.js
export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy", // Correctly used for mocking
    "^@/(.*)$": "<rootDir>/src/$1", // Keep @ alias mapping
  },
  transform: {
    // Removed incorrect transform for CSS files
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Keep Babel transform for JS/TS files
  },
  // Removed explicit transform rule for .ts files
  // transform: {
  //   "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  // },
};
