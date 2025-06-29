# Project To-Do List

This document tracks the tasks required to build the Infotropy front-end project. AI agents working on this project should consult this list to identify pending tasks and update it upon verified completion.

## Instructions for AI Agents

- Before starting work, read this `todo.md` file to understand the current state and priorities.
- Focus on tasks within the relevant section. Start with "Core Structure Tasks".
- Only mark a task as complete (`[x]`) after you have successfully implemented and verified it (e.g., through testing, successful build, or deployment verification).
- If you encounter any ambiguities or make significant decisions not explicitly covered in the documentation, log them in a new markdown file in the `docs/decisions/` folder.

## Core Structure Tasks

These tasks focus on setting up the basic project structure, main components, state management, and initial styling.

- [x] Initialize a new React project (e.g., using Vite or Create React App).
- [x] Install necessary dependencies (React, Tailwind CSS, Matter.js, AWS SDK for JavaScript).
- [x] Configure Tailwind CSS.
- [x] Create the main `App` component with global styling and layout.
- [x] Implement the `Header` component.
- [x] Implement the `Footer` component.
- [x] Implement the `Description Section` component, capable of displaying different text based on the active module state.
- [x] Implement the `Central Content Window` component, capable of rendering different child components based on the active module state.
- [x] Implement the `Navigation Buttons` component (e.g., "Back to Menu").
- [x] Set up basic state management in the `App` component to track the active module.
- [x] Implement the `Module Menu Component` to display a list of available modules (initially just a placeholder for the Matter.js simulation).
- [x] Integrate the `Module Menu Component` into the `Central Content Window` as the initial view.
- [x] Ensure the `Description Section` displays the main Infotropy introduction when the Module Menu is active.
- [x] Add basic routing or state logic to switch from the Module Menu to a specific module view (initially just a placeholder).
- [x] Implement the logic for the "Back to Menu" button to return to the Module Menu view.
- [x] Set up the basic project file structure, including the `src/modules/` directory.
- [x] Create the initial test setup using Jest and React Testing Library.
- [x] Write basic unit tests for core components (`App`, `Header`, `Footer`).
- [x] (Optional) Create `Dockerfile` and `docker-compose.yml` for the development environment.
- [x] Update documentation files (`docs/README.md`, `docs/ARCHITECTURE.md`, etc.) with any implementation-specific details or decisions made during these tasks.

## Matter.js Simulation Module Tasks

These tasks focus on implementing the first simulation module. This section should only be addressed after the "Core Structure Tasks" are completed and verified.

- [ ] Create the module directory `src/modules/matterjs-simulation/`.
- [ ] Create the main component file `src/modules/matterjs-simulation/MatterJsSimulation.js`.
- [ ] Implement the Matter.js simulation logic within the `MatterJsSimulation` component, including canvas setup, engine, renderer, world, boundaries, and bouncing balls as described in the original `info.md`.
- [ ] Ensure the simulation is responsive and handles canvas resizing.
- [ ] Implement cleanup logic for the Matter.js instance.
- [ ] Create the module documentation file `docs/modules/matterjs-simulation.md`, including a description for the Description Section.
- [ ] Add the Matter.js simulation module to the list of available modules in the `Module Menu Component`.
- [ ] Update the state management logic in `App` to handle the "matterjs-simulation" state.
- [ ] Ensure the `Description Section` displays the Matter.js simulation description when this module is active.
- [ ] Write unit and integration tests for the `MatterJsSimulation` component.
- [ ] Update documentation files with any implementation-specific details or decisions.

## Future Module Tasks

(This section will be populated as new modules are planned.)

## Infrastructure & Deployment Tasks

These tasks relate to setting up the AWS environment and deploying the application.

- [x] Configure AWS CLI with the "personal" profile. (Assumed configured based on successful commands)
- [x] Create the S3 bucket `infotropy-website-bucket` in `us-east-1` using the "personal" profile.
- [x] Configure S3 static website hosting for the bucket using the "personal" profile.
- [x] Apply a bucket policy for public read access using the "personal" profile.
- [x] Perform an initial build of the application (`npm run build` or `yarn build`).
- [x] Deploy the built application to the S3 bucket using `aws s3 sync` with the "personal" profile and `--delete` flag.
- [ ] Verify the deployed application is accessible via the S3 static website endpoint. (This step requires manual verification by the user).
- [ ] (Optional) Set up a CI/CD pipeline for automated building and deployment.

## Decision Log

(This section serves as a reminder to check the `docs/decisions/` folder for logged decisions.)
