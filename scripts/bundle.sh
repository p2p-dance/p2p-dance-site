#!/usr/bin/env bash

set -eux

# Determine the repo root directory
REPO_ROOT="$(git rev-parse --show-toplevel)"

# pants must be executed from the repo root directory
cd "${REPO_ROOT}"

# Produce the application bundle
"${REPO_ROOT}/pants" bundle src/main/scala/dance/p2p:app --bundle-jvm-archive=tgz
