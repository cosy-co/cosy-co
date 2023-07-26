#!/bin/bash

# Function to update Docker images
function update() {
  echo "Updating docker services..."
  docker-compose -f "$COMPOSE_FILE" stop
  git pull
  docker-compose -f "$COMPOSE_FILE" up --build -d
}

# Function to restart Docker containers
function restart() {
  echo "Restarting docker services..."
  docker-compose -f "$COMPOSE_FILE" restart
}

# Function to view Docker container logs
function logs() {
  echo "Showing logs for docker services..."
  docker-compose -f "$COMPOSE_FILE" logs -t -f
}

# Check if the environment argument is specified
if [ -z "$1" ]; then
  echo "Usage: ./run.sh [prod|dev] [update|restart|logs]"
  exit 1
fi

# Set the environment file based on the argument
if [ "$1" == "prod" ]; then
  COMPOSE_FILE="docker-compose.production.yml"
elif [ "$1" == "dev" ]; then
  COMPOSE_FILE="docker-compose.development.yml"  # Adjust the filename for development, if necessary
else
  echo "Unknown environment '$1'. Please use 'prod' or 'dev'."
  exit 1
fi

# Handle command-line arguments
case "$2" in
  "update")
    update
    ;;
  "restart")
    restart
    ;;
  "logs")
    logs
    ;;
  *)
    echo "Usage: ./run.sh [prod|dev] [update|restart|logs]"
    exit 1
    ;;
esac
