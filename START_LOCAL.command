#!/bin/bash
set -e
cd "$(dirname "$0")"
PORT=4173
echo "Starting WORKBASE corporate website at http://localhost:${PORT}"
(sleep 1; open "http://localhost:${PORT}") >/dev/null 2>&1 &
python3 -m http.server "$PORT"
