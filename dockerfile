# Use Node.js as the base image
FROM node:18-alpine 

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies (force install if needed)
RUN npm i --force

# Copy the entire project
COPY . .

# Build the React app
RUN npm run build

# Expose port 3000 (React default)
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
