#!/bin/bash

# Ensure the wasm binary exists
if [ ! -f "artifacts/hello.wasm" ]; then
    echo "WASM file not found! Please compile it first."
    exit 1
fi

avs-toolkit-cli deploy contracts --artifacts-path ./artifacts --operators wasmatic

if [ $? -eq 0 ]; then
    echo "Deployment successful!"
else
    echo "Deployment failed!"
    exit 1
fi
