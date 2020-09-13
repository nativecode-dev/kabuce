#!/bin/bash

set -e

PATH=node_modules/.bin:$PATH

if [ "$DOCKER_USERNAME" = "" ] || [ "$DOCKER_TOKEN" = "" ]; then
  echo "You must provide both a DOCKER_USERNAME and DOCKER_TOKEN environment variables."
  exit 1
fi

echo -n $DOCKER_TOKEN | docker login -u $DOCKER_USERNAME --password-stdin

for PROJECT_PATH in $(lerna list --json | jq -r '.[].location'); do
  PROJECT=$(basename $PROJECT_PATH)
  echo $PROJECT

  if [ ! -f $PROJECT_PATH/package.json ]; then
    continue
  fi

  # Define image names and default tag.
  IMAGE_NAME=nativecode/${PROJECT}
  PROJECT_DIR=packages/${PROJECT}
  PACKAGE_NAME=$(cat $PROJECT_PATH/package.json | jq -r '.name')
  VERSION=$(cat $PROJECT_PATH/package.json | jq -r '.version')

  # Build image and apply version tag
  docker build -f $PROJECT_PATH/Dockerfile -t ${IMAGE_NAME} $PROJECT_PATH || exit 1
  docker tag ${IMAGE_NAME} ${IMAGE_NAME}:${VERSION} || exit 1
  docker push ${IMAGE_NAME}:${VERSION} || exit 1

  # Create tags and push image.
  for TAG in $@; do
    echo "Tagging ${IMAGE_NAME} with ${TAG}"
    docker tag ${IMAGE_NAME} ${IMAGE_NAME}:${TAG} || exit 1
    docker push ${IMAGE_NAME}:${TAG} || exit 1
    echo "Tagged ${IMAGE_NAME}:${TAG}"
  done
done
