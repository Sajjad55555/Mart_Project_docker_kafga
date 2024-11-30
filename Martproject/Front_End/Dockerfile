# Use an official Python runtime as a parent image
FROM node:latest

LABEL maintainer="Sajjad Haider"

# Set the working directory in the container
WORKDIR /code

# Install system dependencies required for potential Python packages
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    protobuf-compiler \
    && rm -rf /var/lib/apt/lists/*

# Copy the package.json and package-lock.json first to leverage Docker cache
COPY package*.json /code/

# Install dependencies without copying node_modules
RUN npm install --legacy-peer-deps

# Copy the rest of the project, excluding node_modules
COPY . /code/

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the app
CMD ["npm", "run", "dev"]
