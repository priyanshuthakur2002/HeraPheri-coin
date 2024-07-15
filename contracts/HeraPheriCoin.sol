// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract HeraPheriCoin is ERC20 {
    address public owner;
    constructor() ERC20("HeraPheriCoin", "HPC") {
        uint256 initialSupply = 70000000;
        _mint(msg.sender, initialSupply * 10**decimals());
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can mint tokens");
        _;
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function burn(uint256 amount) public{
        _burn(msg.sender, amount);
    }
}