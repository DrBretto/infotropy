# Testing Strategy

This document describes the testing strategy for the Infotropy front-end project. Automated testing is crucial for maintaining code quality and ensuring functionality as the project expands, especially with contributions from AI agents.

## Principles

- **Automated Tests:** Prioritize automated tests that can be run consistently as part of the development and build process.
- **Layered Testing:** Implement tests at different levels (unit, integration) to cover various aspects of the application.
- **Fast Feedback:** Tests should be fast to run to provide quick feedback to developers (human or AI).
- **Maintainable Tests:** Tests should be clear, readable, and easy to maintain as the codebase evolves.

## Testing Frameworks

- **Jest:** A JavaScript testing framework used for running tests.
- **React Testing Library:** A library for testing React components in a way that simulates user interactions and focuses on accessibility.

## Test Types

### 1. Unit Tests

- **Purpose:** To test individual functions, components (in isolation), or small pieces of code to ensure they work as expected.
- **Focus:** Testing component logic, utility functions, and pure functions.
- **Location:** Test files should be placed alongside the code they are testing, typically in a `__tests__` directory or with a `.test.js`/`.test.tsx` suffix.
- **Implementation:** Use Jest for running tests and React Testing Library for rendering and interacting with React components.

### 2. Integration Tests

- **Purpose:** To test the interaction between multiple components or between components and external services (mocked).
- **Focus:** Ensuring that different parts of the application work together correctly.
- **Location:** Can be placed in a dedicated `integration-tests` directory or within component `__tests__` folders when testing interactions between related components.
- **Implementation:** Use Jest and React Testing Library to render and interact with groups of components.

### 3. Build Tests

- **Purpose:** To verify that the build process completes successfully and produces the expected output.
- **Focus:** Checking for compilation errors, correct asset generation, and potentially basic checks on the output files (e.g., checking for the presence of `index.html`).
- **Implementation:** These are often part of the CI/CD pipeline, but basic checks can be included as scripts in `package.json`.

### 4. Deployment Verification

- **Purpose:** To perform basic checks after deployment to ensure the site is accessible and loads without critical errors.
- **Focus:** Checking the S3 static website endpoint for a successful response.
- **Implementation:** Can be manual initially, but could be automated later using scripting or monitoring tools.

## Running Tests

Tests can typically be run using npm or yarn scripts defined in `package.json`.

```bash
# Run all tests
npm test
# or yarn test

# Run tests with coverage report
npm test -- --coverage
# or yarn test --coverage
```

Refer to the `package.json` file for specific test scripts.

## AI Agent Checklist

- Write unit and integration tests for new components and functionality.
- Ensure tests pass before marking a task as complete in [`docs/todo.md`](docs/todo.md).
- Run tests frequently during development.
- Refer to existing test files for examples and patterns.
