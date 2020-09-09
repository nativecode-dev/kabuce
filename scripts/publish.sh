#!/bin/bash

set -e

for PROJECT in $(cat .changed); do
  echo "$PROJECT changed."

  if [ ! -f packages/$PROJECT/package.json ]; then
    continue
  fi

  # Define image names and default tag.
  IMAGE_NAME=nativecode/${PROJECT}
  PROJECT_DIR=packages/${PROJECT}
  PROJECT_DEPLOY=deployments/${PROJECT}.yaml
  VERSION=$(cat packages/$PROJECT/package.json | jq -r '.version')

  # Build image and apply version tag
  docker build -f packages/$PROJECT/Dockerfile -t ${IMAGE_NAME} packages/$PROJECT || exit 1
  docker tag ${IMAGE_NAME} ${IMAGE_NAME}:${VERSION} || exit 1
  docker push ${IMAGE_NAME}:${VERSION} || exit 1

  # Create tags and push image.
  for TAG in $@; do
    echo "Tagging ${IMAGE_NAME} with ${TAG}"
    docker tag ${IMAGE_NAME} ${IMAGE_NAME}:${TAG} || exit 1
    docker push ${IMAGE_NAME}:${TAG} || exit 1
    echo "Tagged ${IMAGE_NAME}:${TAG}"
  done

  if [ -f ${PROJECT_DEPLOY} ]; then
    CONFIG=$(mktemp)
    sed "s|:latest|:${VERSION}|g" ${PROJECT_DEPLOY} >$CONFIG || exit 1

    echo "Applying ${PROJECT_DEPLOY}..."
    kubectl apply -f $CONFIG || exit 1
  fi
done
