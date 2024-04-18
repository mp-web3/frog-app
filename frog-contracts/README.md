## Foundry

### Deploy FrogJump.sol on linea-sepolia testnet
https://docs.linea.build/build-on-linea/quickstart/deploy-smart-contract/foundry 

forge create --rpc-url linea-sepolia src/FrogJump.sol:FrogJump --private-key $PRIVATE_KEY_DEV_WALLET --constructor-args "Froggy"

### Verify FrogJump contract
https://docs.linea.build/build-on-linea/quickstart/verify-smart-contract/foundry#verify-a-contract-that-has-already-been-deployed

forge verify-contract --etherscan-api-key $LINEASCAN_API_KEY --verifier-url https://api-testnet.lineascan.build/api 0x5d83Ac3412C42C6B6cd393a27b0563a294c7572F src/FrogJump.sol:FrogJump --watch

forge verify-contract --chain linea-testnet src/FrogJump.sol:FrogJump --watch


##### Foundry ######

**Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust.**

Foundry consists of:

-   **Forge**: Ethereum testing framework (like Truffle, Hardhat and DappTools).
-   **Cast**: Swiss army knife for interacting with EVM smart contracts, sending transactions and getting chain data.
-   **Anvil**: Local Ethereum node, akin to Ganache, Hardhat Network.
-   **Chisel**: Fast, utilitarian, and verbose solidity REPL.

## Documentation

https://book.getfoundry.sh/

## Usage

### Build

```shell
$ forge build
```

### Test

```shell
$ forge test
```

### Format

```shell
$ forge fmt
```

### Gas Snapshots

```shell
$ forge snapshot
```

### Anvil

```shell
$ anvil
```

### Deploy

```shell
$ forge script script/Counter.s.sol:CounterScript --rpc-url <your_rpc_url> --private-key <your_private_key>
```

### Cast

```shell
$ cast <subcommand>
```

### Help

```shell
$ forge --help
$ anvil --help
$ cast --help
```
