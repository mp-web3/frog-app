// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import { Script } from "forge-std/Script.sol";
import { PayFrogJump } from "../src/PayFrogJump.sol";
import { console } from "forge-std/console.sol";

contract DeployPayFrogJumpScript is Script {
    
    function run() public {
        vm.startBroadcast();
        PayFrogJump payFrogJump = new PayFrogJump("RichRickyV2");

        // Optionally log the address of the deployed contract
        console.log("Deployed FrogJump at:", address(payFrogJump));
        vm.stopBroadcast();
    }

}