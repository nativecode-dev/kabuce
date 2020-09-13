#!/bin/bash

set -e

PATH=node_modules/.bin:$PATH

MODE=${1:-"$MODE"}
NAME=${2:-"canary"}

case ${MODE} in
"canary")
    lerna publish --canary --preid $NAME --dist-tag $NAME --no-changelog
    ;;
"prerelease")
    lerna publish --conventional-prerelease=* --dist-tag next --preid next --no-changelog
    ;;
"release")
    lerna publish --conventional-graduate --create-release gitlab
    ;;
esac
