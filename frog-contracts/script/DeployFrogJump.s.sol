// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import { Script } from "forge-std/Script.sol";
import { FrogJump } from "../src/FrogJump.sol";
import { console } from "forge-std/console.sol";

contract DeployFrogJumpScript is Script {
    
    function run() public {
        vm.broadcast();
        FrogJump frogJump = new FrogJump("Froggy");
        vm.stopBroadcast();

        // Optionally log the address of the deployed contract
        console.log("Deployed FrogJump at:", address(frogJump));
    }

}