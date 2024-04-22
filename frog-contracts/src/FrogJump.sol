// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

interface IFrog {
    function name() external view returns (string memory);
    function jumps() external view returns (uint256);
}

interface IJumper {
    function jump() external;
}

contract FrogJump is IFrog, IJumper{
    string public name;
    uint public jumps;

    constructor(string memory name_) {
        name = name_;
    }

    function jump() public {
        jumps++;
    }
}