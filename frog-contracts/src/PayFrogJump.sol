// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;
import { IFrog } from "./FrogJump.sol";

interface IPayableJumper {
    function jump() external payable;
}

contract PayFrogJump is IFrog, IPayableJumper{

    uint256 public constant PRICE = 100000000000000; //0.0001 Ether +-= $0.32
    string public name;
    uint public jumps;

    constructor(string memory name_) {
        name = name_;
    }

    function jump() public payable {
        jumps += msg.value/PRICE;
    }
}