# Project To-Do List

This document tracks the tasks required to build the Infotropy front-end project. AI agents working on this project should consult this list to identify pending tasks and update it upon verified completion.

## Instructions for AI Agents

- Before starting work, read this `todo.md` file to understand the current state and priorities.
- Focus on tasks within the relevant section. Start with "Core Structure Tasks".
- Only mark a task as complete (`[x]`) after you have successfully implemented and verified it (e.g., through testing, successful build, or deployment verification).
- If you encounter any ambiguities or make significant decisions not explicitly covered in the documentation, log them in a new markdown file in the `docs/decisions/` folder.

## Core Structure Tasks

These tasks focus on setting up the basic project structure, main components, state management, and initial styling, including the terminal-like layout.

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
- [x] **Revise Layout Implementation (Attempt 3):** Needs revision.
  - [x] Adjust Main Layout Structure (`App.tsx`) to remove padding/gap from `main` and remove internal padding from the `ScreenContainer`.
  - [x] Adjust Header and Footer Styling to add internal padding.
  - [x] Review Component Text Colors (DescriptionSection, CentralContentWindow, ChatBoxPlaceholder) to ensure they inherit from the `ScreenContainer` where appropriate.
  - [x] Update Central Content Window Styling (`CentralContentWindow.tsx`) to confirm the nested "window" border and flex-grow are correct within the `ScreenContainer`.
  - [x] Create a test for the `ChatBoxPlaceholder` component.
  - [x] Run all tests.
  - [x] Commit the changes to Git.
  - [x] Push the changes to the remote repository.
  - [x] Build the application.
  - [x] Deploy the updated build to S3.
  - [x] Update documentation files with any implementation-specific details or decisions made during these revised tasks.
- [x] **Revise Layout Implementation (Attempt 4):** Needs revision.
  - [x] Adjust Main Layout Structure (`App.tsx`) to remove `flex flex-col space-y-8` and `p-8` from `ScreenContainer` and add a new inner `div` with `w-full h-full p-8 flex flex-col space-y-8`.
  - [x] Review Children Component Styling (DescriptionSection, CentralContentWindow, ChatBoxPlaceholder) to remove any padding added in Attempt 3.
  - [x] Run all tests.
  - [x] Commit the changes to Git.
  - [x] Push the changes to the remote repository.
  - [x] Build the application.
  - [x] Deploy the updated build to S3.
  - [x] Update documentation files with any implementation-specific details or decisions made during these revised tasks.
- [x] **Revise Layout Implementation (Attempt 5 - Standard CSS):** Needs revision.
  - [x] Define Standard CSS rules for the `main` tag (grid layout, no padding/gap).
  - [x] Define Standard CSS rules for the `ScreenContainer` class (fill space, background, border, text color, box-sizing).
  - [x] Adjust Main Layout Structure (`App.tsx`) to remove Tailwind grid/layout/color classes from `main` and `ScreenContainer`, add the `screen-container` class to `ScreenContainer`, and add the new inner `div` with Tailwind padding/flex classes.
  - [x] Review Children Component Styling (DescriptionSection, CentralContentWindow, ChatBoxPlaceholder) to ensure no conflicting padding classes.
  - [x] Run all tests.
  - [x] Commit the changes to Git.
  - [x] Push the changes to the remote repository.
  - [x] Build the application.
  - [x] Deploy the updated build to S3.
  - [x] Update documentation files with any implementation-specific details or decisions made during these revised tasks.
- [ ] **Revise Layout Implementation (Attempt 6 - Final Tweaks):**
  - [ ] Set global background to black using standard CSS on the `main` tag.
  - [ ] Make the header text smaller using Tailwind classes.
  - [ ] Change the footer copyright text to "drbretto".
  - [ ] Review component styling for text color inheritance with the global black background.
  - [ ] Run all tests.
  - [ ] Commit the changes to Git.
  - [ ] Push the changes to the remote repository.
  - [ ] Build the application.
  - [ ] Deploy the updated build to S3.
  - [ ] Update documentation files with any implementation-specific details or decisions made during these revised tasks.

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
