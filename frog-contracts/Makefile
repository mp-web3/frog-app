-include .env

### Shortcut for sending 1 eth from an Anvil generated address
send-tETH:; cast send --value 1ether --unlocked --from 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 0x9c03Ce240E2D6EEB70B7Ebe73B1289EF4ecBF5A6

### Deploy FrogJump.sol on Anvil with anvil generated account
deploy-FrogJump-anvil:; forge script ./script/FrogJump.s.sol --rpc-url http://localhost:8545 --broadcast --sender 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 --unlocked --chain-id 31337 -vvvv

### Deploy FrogJump.sol on Linea-Sepolia
deploy-FrogJump-linea-sepolia:; forge script script/DeployFrogJump.s.sol --rpc-url $(SEPOLIA_LINEA_RPC_URL) --private-key $(PRIVATE_KEY_DEV_WALLET) --broadcast -vvvv

### Verify a deployed contract
verify-FrogJump-linea-sepolia:; forge verify-contract --etherscan-api-key $(LINEASCAN_API_KEY) --verifier-url https://api-testnet.lineascan.build/api $(CONTRACT_ADDRESS) src/FrogJump.sol:FrogJump --watch

### Deploy and Verify FrogJump.sol on Linea-Sepolia - NOT WORKING
deploy-and-verify-FrogJump-linea-sepolia:; forge script script/DeployFrogJump.s.sol:DeployFrogJumpScript --rpc-url $(SEPOLIA_LINEA_RPC_URL) --private-key $(PRIVATE_KEY_DEV_WALLET) --broadcast --verify --verifier-url https://api.lineascan.build/api --etherscan-api-key $(LINEASCAN_API_KEY) -vvvv
