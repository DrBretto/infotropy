# Docker Setup (Optional)

This document provides instructions for setting up a consistent development environment using Docker. While not strictly required for deploying to S3, using Docker can help ensure all developers (human or AI) are working in the same environment, reducing compatibility issues.

## Prerequisites

- Ensure you have Docker Desktop installed and running on your machine.

## 1. Create Dockerfile

Create a file named `Dockerfile` in the root of the project directory. This file defines the steps to build a Docker image for the development environment.

```dockerfile
# Use a Node.js image as the base
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
# This helps leverage Docker's layer caching
COPY package*.json ./

# Install dependencies
RUN npm install
# If using yarn, use: RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose the port the development server runs on (e.g., 3000 for Create React App, 5173 for Vite)
# Update this port based on your chosen build tool
EXPOSE 3000

# Command to run the development server
CMD ["npm", "start"]
# If using yarn, use: CMD ["yarn", "start"]
```

_Note: Update the `EXPOSE` port and `CMD` instruction based on the specific build tool (Vite, Create React App, etc.) chosen during implementation._

## 2. Create docker-compose.yml (Optional but Recommended)

Create a file named `docker-compose.yml` in the root of the project directory. This file simplifies building and running the Docker container.

```yaml
version: "3.8"

services:
  frontend:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000" # Map host port to container port (update if needed)
    volumes:
      - .:/app # Mount the project directory into the container
      - /app/node_modules # Exclude node_modules from the mount to use the container's installed dependencies
    environment:
      # Add any environment variables needed for development here
      NODE_ENV: development
    # Command to override the default CMD in Dockerfile if needed
    # command: npm start
```

_Note: Update the ports mapping (`"3000:3000"`) to match the port your development server uses._

## 3. Build and Run the Container

Navigate to the project root directory in your terminal.

Build the Docker image:

```bash
docker-compose build
```

Run the container:

```bash
docker-compose up
```

This will start the development server inside the Docker container. The application should be accessible in your browser at the mapped port (e.g., `http://localhost:3000`).

To run the container in detached mode (in the background):

```bash
docker-compose up -d
```

To stop the container:

```bash
docker-compose down
```

## AI Agent Checklist

- If using Docker for development, ensure a `Dockerfile` and `docker-compose.yml` are present and correctly configured for the chosen build tool.
- Use `docker-compose build` and `docker-compose up` to run the development environment within Docker.
- Document any necessary updates to the `Dockerfile` or `docker-compose.yml` in this document or a decision log.
