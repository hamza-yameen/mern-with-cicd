# Use an official Node.js runtime as a parent image
FROM node:16-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Use a lightweight Node.js server to serve the built application
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy the built React app from the previous stage
COPY --from=build /app/build ./build

# Install serve to serve the static files
RUN npm install -g serve

# Expose port 3000 for the React app
EXPOSE 3000

# Start the server to serve the React app
CMD ["serve", "-s", "build", "-l", "3000"]