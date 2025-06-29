# Infotropy Front-end Project

## Project Overview

This project aims to develop a modular, single-page React application serving as the Infotropy landing page. It features a central dynamic content window for displaying various simulations and modules, a dynamic description section, and external navigation. The project is designed for future expansion via AI agents, with comprehensive markdown documentation to guide development and preserve context.

The application is built using **React** and **Vite**, with styling handled exclusively by **Tailwind CSS (v3)**. The 2D physics simulation will use **Matter.js**. The application will be hosted as a static website on AWS S3 in the `us-east-1` region, using the "personal" AWS profile for all related operations.

## Setup Instructions

1.  **Clone the Repository:** (Instructions will be added here once the repository is set up)
2.  **Install Dependencies:**
    ```bash
    npm install
    # or yarn install
    ```
3.  **Optional: Docker Setup:** Refer to [`docs/DOCKER.md`](docs/DOCKER.md) for instructions on setting up the development environment using Docker.
4.  **AWS Configuration:** Ensure your AWS CLI is configured with the "personal" profile. Refer to [`docs/AWS_SETUP.md`](docs/AWS_SETUP.md) for details on setting up the S3 bucket.

## Running Locally

To run the project locally during development using Vite:

```bash
npm run dev
# or yarn dev
```

This will start the Vite development server, typically accessible at `http://localhost:5173`.

## Building the Project

To build the static files for deployment:

```bash
npm run build
# or yarn build
```

This will generate a `dist` folder containing the production-ready static assets.

## Deployment

Refer to [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for detailed instructions on deploying the built application to the AWS S3 bucket using the "personal" AWS profile.

## Documentation

All project documentation is located in the `docs/` folder. Key documents include:

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md): Project architecture and design principles.
- [`docs/AWS_SETUP.md`](docs/AWS_SETUP.md): AWS infrastructure setup and profile usage.
- [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md): Deployment process.
- [`docs/TESTING.md`](docs/TESTING.md): Testing strategy.
- [`docs/DOCKER.md`](docs/DOCKER.md): Docker setup.
- [`docs/todo.md`](docs/todo.md): Project task list.
- `docs/modules/`: Documentation for individual modules.
- `docs/decisions/`: Log of significant project decisions.

For context on initial setup challenges, refer to:

- [`docs/decisions/2025-06-29-removed-react-router.md`](docs/decisions/2025-06-29-removed-react-router.md)
- [`docs/decisions/2025-06-29-reverted-tailwind-css-to-v3.md`](docs/decisions/2025-06-29-reverted-tailwind-css-to-v3.md)

## AI Agent Instructions

This project is designed with AI agents in mind. Please refer to the "Instructions for AI Agents" section in [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) and the guidelines in [`docs/todo.md`](docs/todo.md) for specific instructions on contributing to this project autonomously.

## License

(License information will be added here later)
