-include .env

### Shortcut for sending 1 eth from an Anvil generated address
send-tETH:; cast send --value 1ether --unlocked --from 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 0x9c03Ce240E2D6EEB70B7Ebe73B1289EF4ecBF5A6

### Deploy FrogJump.sol on Anvil with anvil generated account
deploy-FrogJump-anvil:; forge script ./script/FrogJump.s.sol --rpc-url http://localhost:8545 --broadcast --sender 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 --unlocked --chain-id 31337 -vvvv

### Deploy FrogJump.sol on Linea-Sepolia
deploy-FrogJump-linea-sepolia:; forge script script/DeployFrogJump.s.sol --rpc-url $(SEPOLIA_LINEA_RPC_URL) --private-key $(PRIVATE_KEY_DEV_WALLET) --broadcast -vvvv

### Verify a deployed contract
verify-FrogJump-linea-sepolia:; forge verify-contract --etherscan-api-key $(LINEASCAN_API_KEY) --verifier-url $(LINEASCAN_SEPOLIA_API) $(CONTRACT_ADDRESS) src/FrogJump.sol:FrogJump --watch

### Deploy and Verify FrogJump.sol on Linea-Sepolia - NOT WORKING
deploy-and-verify-FrogJump-linea-sepolia:; forge script script/DeployFrogJump.s.sol:DeployFrogJumpScript --rpc-url $(SEPOLIA_LINEA_RPC_URL) --private-key $(PRIVATE_KEY_DEV_WALLET) --broadcast --verify --verifier-url https://api.lineascan.build/api --etherscan-api-key $(LINEASCAN_API_KEY) -vvvv

########################## PayFrogJump ################################

### Deploy PayFrogJump.sol on Linea-Sepolia
deploy-PayFrogJump-linea-sepolia:; forge script script/DeployPayFrogJump.s.sol --rpc-url $(SEPOLIA_LINEA_RPC_URL) --private-key $(PRIVATE_KEY_DEV_WALLET) --broadcast -vvvv

### Call Name Function PayFrogJump.sol on Linea-Sepolia
call-name-PayFrogJump-linea-sepolia:; cast call $(PAYFROGJUMP_CONTRACT_ADDRESS) "name()(string)" --rpc-url $(SEPOLIA_LINEA_RPC_URL) --account $(ADDRESS_DEV_WALLET) --private-key $(PRIVATE_KEY_DEV_WALLET)

### Call Jumps Function PayFrogJump.sol on Linea-Sepolia
call-jumps-PayFrogJump-linea-sepolia:; cast call $(PAYFROGJUMP_CONTRACT_ADDRESS) "jumps()(uint)" --rpc-url $(SEPOLIA_LINEA_RPC_URL) --account $(ADDRESS_DEV_WALLET) --private-key $(PRIVATE_KEY_DEV_WALLET)

### Call balanceOf Function PayFrogJump.sol on Linea-Sepolia
call-getEthBalance-PayFrogJump-linea-sepolia:; cast call $(PAYFROGJUMP_CONTRACT_ADDRESS) "getEthBalance(address)(uint256)" --rpc-url $(SEPOLIA_LINEA_RPC_URL) --account $(ADDRESS_DEV_WALLET) --private-key $(PRIVATE_KEY_DEV_WALLET)

### Call PRICE Function PayFrogJump.sol on Linea-Sepolia
call-PRICE-PayFrogJump-linea-sepolia:; cast call $(PAYFROGJUMP_CONTRACT_ADDRESS) "PRICE()(uint256)" --rpc-url $(SEPOLIA_LINEA_RPC_URL) --account $(ADDRESS_DEV_WALLET) --private-key $(PRIVATE_KEY_DEV_WALLET)

### Send transaction function jump() PayFrogJump.sol on Linea-Sepolia
send-jump-PayFrogJump-linea-sepolia:; cast send $(PAYFROGJUMP_CONTRACT_ADDRESS) "jump()()" --rpc-url $(SEPOLIA_LINEA_RPC_URL) --account $(ADDRESS_DEV_WALLET) --private-key $(PRIVATE_KEY_DEV_WALLET) --value 0.0001ether --async















