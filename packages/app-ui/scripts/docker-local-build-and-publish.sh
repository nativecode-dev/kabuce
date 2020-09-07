#!/usr/bin/env bash

docker build --cache-from nativecode/kabuce-appui:latest --tag nativecode/kabuce-appui:latest .
docker push nativecode/kabuce-appui:latest
