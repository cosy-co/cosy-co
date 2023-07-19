#!/bin/bash

# Update Docker images
function update() {
  echo "Updating docker services..."
  docker-compose -f docker-compose.production.yml stop
  git pull
  docker-compose -f docker-compose.production.yml up --build -d
}

# Restart Docker containers
function restart() {
  echo "Restarting docker services..."
  docker-compose -f docker-compose.production.yml restart
}

# View Docker container logs
function logs() {
  echo "Showing logs for docker services..."
  docker-compose -f docker-compose.production.yml logs -t -f
}

# Handle command line arguments
case "$1" in
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
    echo "Usage: ./run.sh [update|restart|logs]"
    exit 1
    ;;
esac
