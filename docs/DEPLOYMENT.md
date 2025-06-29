# Deployment Guide

This document provides step-by-step instructions for building and deploying the Infotropy front-end application to the AWS S3 static website hosting bucket.

**CRITICAL INSTRUCTION:** All AWS operations related to this project **MUST explicitly use the "personal" AWS profile**. Do NOT use the default profile or any other profile.

## Prerequisites

- Ensure you have the AWS CLI installed and configured with the "personal" profile. Refer to [`docs/AWS_SETUP.md`](docs/AWS_SETUP.md) for details.
- Ensure the S3 bucket (`infotropy-website-bucket`) is created and configured for static website hosting with a public read policy. Refer to [`docs/AWS_SETUP.md`](docs/AWS_SETUP.md) for details.
- Ensure you have Node.js and npm/yarn installed.
- Ensure project dependencies are installed (`npm install` or `yarn install`).

## Manual Deployment Steps

1.  **Build the Application:**
    First, build the React application. This process compiles the React code, optimizes assets, and generates static HTML, CSS, and JavaScript files in a build directory (typically `build` or `dist`).

    ```bash
    npm run build
    # or yarn build
    ```

    Verify that the build process completes successfully and the build directory is created.

2.  **Sync Built Files to S3:**
    Use the AWS CLI `s3 sync` command to upload the contents of the build directory to the S3 bucket. The `sync` command is efficient as it only uploads new or modified files and can optionally delete files in the destination that are not in the source.

    **IMPORTANT:** Ensure you specify the `--profile personal` flag and the `--delete` flag. The `--delete` flag ensures that files removed from the project are also removed from the S3 bucket, keeping the deployed site clean.

    ```bash
    aws s3 sync ./dist/ s3://infotropy-website-bucket --profile personal --delete
    ```

    _Note: The build process with Vite typically outputs to a `dist` folder._

    Monitor the output of the command to ensure files are being uploaded correctly.

3.  **Verify Deployment:**
    Once the sync is complete, open your web browser and navigate to the S3 static website endpoint URL to verify that the deployed application is loading correctly. You can find the endpoint URL in the S3 bucket properties in the AWS Management Console or in [`docs/AWS_SETUP.md`](docs/AWS_SETUP.md).

## CI/CD Pipeline Planning

For future autonomous development and streamlined deployments, implementing a Continuous Integration/Continuous Deployment (CI/CD) pipeline is highly recommended.

- **Benefits:** Automates the build, test, and deployment process, ensuring consistency, reliability, and faster delivery of updates.
- **Recommended Tool:** GitHub Actions is a strong choice due to its direct integration with the project's likely hosting on GitHub.
- **Workflow:** The pipeline should be configured to trigger automatically on pushes to the main branch (or a designated deployment branch). The typical steps will include:
  1.  Checkout the code from the repository.
  2.  Set up the Node.js environment.
  3.  Install project dependencies (`npm install`).
  4.  Run automated tests (`npm test`).
  5.  Build the application (`npm run build`).
  6.  Configure AWS credentials for the "personal" profile in the CI/CD environment (using GitHub Secrets for security).
  7.  Sync the built files from the `dist` folder to the S3 bucket (`aws s3 sync --profile personal --delete`).
  8.  (Optional) Invalidate CloudFront cache if a CDN is used.
- **AWS Profile:** It is critical that the CI/CD environment is securely configured to use the "personal" AWS profile for all AWS operations.

## AI Agent Checklist

- Execute the build command (`npm run build` or `yarn build`).
- Verify the build directory is created (`dist/`).
- Execute the AWS CLI `s3 sync` command with the correct bucket name (`infotropy-website-bucket`), source directory (`./dist/`), `--profile personal`, and `--delete` flags.
- Verify the sync command completes successfully.
- (Optional but Recommended) Attempt to access the S3 static website endpoint to verify the deployment.
- Update the [`docs/todo.md`](docs/todo.md) file to mark the deployment task as complete upon verified success.
- Plan and implement the CI/CD pipeline (refer to "CI/CD Pipeline Planning" section).
