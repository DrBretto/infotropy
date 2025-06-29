# AI Agent Guidelines for Infotropy Front-end Project

This document provides essential guidelines and instructions for any AI agent contributing to the Infotropy front-end project. Adhering to these guidelines is critical for maintaining project consistency, enabling autonomous operation, and preserving context for future development.

## Core Principles for AI Agents

1.  **Primary Knowledge Source:** The `docs` folder is the primary source of information for understanding the project, its requirements, and its current state. Always consult the relevant documentation files before starting work on a task.
2.  **Task Management:**
    - Always refer to the main project to-do list, [`docs/todo.md`](docs/todo.md), or any phase-specific to-do lists linked from it, to understand current priorities and pending tasks.
    - Only mark a task as complete (`[x]`) in the to-do list after you have successfully implemented and verified it (e.g., through testing, successful build, or deployment verification). Do not mark tasks complete speculatively.
3.  **Decision Logging:** If you encounter any ambiguities, make significant architectural or implementation decisions, or deviate from the documented plan based on new information or constraints, document the decision, the reasoning, and the outcome in a new markdown file within the `docs/decisions/` folder. Use a clear naming convention (e.g., `YYYY-MM-DD-brief-description.md`).
4.  **AWS Profile Usage:** All AWS CLI or SDK operations related to this project **MUST explicitly use the "personal" AWS profile**. This instruction is paramount and should be double-checked before executing any AWS command.
5.  **Utilize Available Tools:** Leverage the provided tools (read files, search files, execute commands, write files, etc.) effectively to gather information, implement code, run tests, and deploy the application, always operating within the defined plan and documentation.
6.  **Code Quality:** Produce clean, readable, and well-commented code, adhering to standard practices for React, TypeScript, and the chosen technologies.
7.  **Styling:** All styling must be done exclusively using Tailwind CSS classes. Avoid inline styles unless absolutely necessary or custom CSS files.
8.  **Responsiveness:** Design components to be fully responsive across common screen sizes.
9.  **Error Handling:** Include basic error handling where appropriate for critical parts of the application.
10. **Version Control & Checkpoints:** Regularly save checkpoints of your work to the GitHub repository. This is especially important AFTER completing and verifying tasks. Use clear and concise commit messages.

## Project-Specific Details

- **Technology Stack:** React, Vite, Tailwind CSS (v3), Matter.js, AWS SDK for JavaScript.
- **Deployment:** Static website hosting on AWS S3 (`infotropy-website-bucket` in `us-east-1`) using the "personal" AWS profile. A CI/CD pipeline is planned for automated deployments.
- **Architecture:** Single-page application with a state-driven full-screen layout, dynamic description section, central dynamic content window, and external navigation buttons.
- **Aesthetic:** Terminal-like, dark, monochromatic theme with simple shapes and rounded corners.

Refer to the other markdown files in the `docs/` folder for detailed plans, setup instructions, and specific task breakdowns.
