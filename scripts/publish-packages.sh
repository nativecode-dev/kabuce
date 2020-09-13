#!/bin/bash

set -e

PATH=node_modules/.bin:$PATH

MODE=${1:-"$MODE"}
NAME=${2:-"canary"}

case ${MODE} in
"canary")
    lerna publish --canary --conventional-commits --preid $NAME --dist-tag $NAME --no-changelog --yes
    ;;
"prerelease")
    lerna publish --conventional-commits --conventional-prerelease=* --dist-tag next --preid next --no-changelog --yes
    ;;
"release")
    lerna publish --conventional-commits --conventional-graduate --create-release gitlab --yes
    ;;
esac
