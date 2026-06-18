# Use a lightweight Node.js base image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install only production dependencies
# RUN npm ci --only=production
RUN npm ci --omit=dev

# Copy the application source code
COPY src/ ./src/

# Document which port the app listens on
EXPOSE 3000

# Start the server when the container runs
CMD ["node", "src/index.js"]