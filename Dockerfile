# Use a Node.js image as the base
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
# This helps leverage Docker's layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the development server runs on (Vite default is 5173)
EXPOSE 5173

# Command to run the development server
CMD ["npm", "run", "dev"]