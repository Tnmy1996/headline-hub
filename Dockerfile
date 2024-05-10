# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory in the container to /app
WORKDIR /src

# Copy package.json and package-lock.json to the working directory
COPY package.json pnpm-lock.yaml ./

# Install project dependencies
RUN npm install -g pnpm && pnpm install

# Copy the current directory contents into the container at /app
COPY . .

# Define environment variables
# ENV VITE_NEWS_API_KEY=<YOUR API KEY>

# Make port 5173 available to the world outside this container
EXPOSE 5173

# Run the application when the container launches
CMD ["pnpm", "run", "dev"]