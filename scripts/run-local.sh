#!/usr/bin/env bash

set -eux

# Determine the repo root directory
REPO_ROOT="$(git rev-parse --show-toplevel)"

# pants must be executed from the repo root directory
cd "${REPO_ROOT}"

# Produce the application bundle
"${REPO_ROOT}/pants" run src/main/scala/dance/p2p:bin \
  --jvm-run-jvm-options="
  -Xms2g -Xmx2g
  -Dlog.access.output=/dev/stdout
  -Dlog.service.output=/dev/stdout" \
  -- \
  -log.level=INFO \
  -http.port=':9000' \
  -admin.port=':9001' \
  -doc.root='gatsby'
