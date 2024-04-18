#!/bin/bash

# Exit script if any command returns a non-zero status
set -e

# Read the command argument (release, release:patch, release:major)
command="${npm_lifecycle_event#release:}"

# Read the current package.json version
current_version=$(node -p "require('./package.json').version")
echo "Current version: $current_version"

# Build the project
npm run build

# Commit the changes
git add .
git commit -m "chore: (ui-kit) new version $new_version"
# TODO: comment this out when ready
# git push origin main

# Increment the version number based on the command argument
case "$command" in
  release)
    new_version=$(npm version --no-git-tag-version minor)
    ;;
  patch)
    new_version=$(npm version --no-git-tag-version patch)
    ;;
  major)
    new_version=$(npm version --no-git-tag-version major)
    ;;
  *)
    echo "Invalid command argument. Usage: $0 {release|release:patch|release:major}"
    exit 1
    ;;
esac
echo "New version: $new_version"

# Publish the project
npm publish --access public || { echo "Error: Failed to publish package."; exit 1; }

# Inform the user
echo "Released $new_version"

exit 0
