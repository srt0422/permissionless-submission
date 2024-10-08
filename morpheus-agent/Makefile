# Declare phony targets
.PHONY: buildService deployToLayer createLayerWallet

buildService: 
	tinygo build -o artifacts/hello.wasm -target wasm services/hello.go
deployToLayer: 
	./scripts/deploy.sh > deploy.log
createLayerWallet:
	./scripts/create_layer_wallet.sh

WASM_SOURCE := ./artifacts/hello.wasm
ENVS := "EXPECTED_VAR=VAL,EXPECTED_VAR1=VAL1"
INPUT := '{"content": "Say hello"}'

# Define the command
test-hello:
	avs-toolkit-cli wasmatic run \
		--wasm-source $(WASM_SOURCE) \
		--envs $(ENVS) \
		--input $(INPUT)