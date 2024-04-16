// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract FrogJump {
    string public name;
    uint public jumps;

    constructor(string memory name_) {
        name = name_;
    }

    function jump() public {
        jumps++;
    }
}