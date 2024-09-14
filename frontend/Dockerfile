# Use a Debian-based Node.js runtime as a parent image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Install Git (required for some npm packages)
RUN apt-get update && apt-get install -y git

# Copy the package.json and package-lock.json to install dependencies first
COPY package*.json /app

# Manually update critical libraries
RUN npm install

# Copy the rest of the code
COPY . /app

# Expose port 80 (or any port your app serves on)
EXPOSE 80

# Run build for the React app
RUN npm run build
EXPOSE 5143

# Start the app (Replace if using a different method, like serving with nginx)
CMD ["npm", "run", "dev"]
