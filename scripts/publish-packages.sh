#!/bin/bash

set -e

MODE=${1:-"$MODE"}
NAME=${2:-"canary"}
LERNA=$(which lerna)

case ${MODE} in
"canary")
    ${LERNA} publish --canary --conventional-commits --preid $NAME --dist-tag $NAME --no-changelog
    ;;
"prerelease")
    ${LERNA} publish --conventional-commits --conventional-prerelease=* --dist-tag next --preid next --no-changelog
    ;;
"release")
    ${LERNA} publish --conventional-commits --conventional-graduate --create-release gitlab
    ;;
esac
