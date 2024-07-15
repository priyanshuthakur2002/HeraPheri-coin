const { expect } = require("chai");
const { ethers } = require("hardhat");

let myToken;
let accounts;

beforeEach(async () => {
  myToken = await ethers.deployContract("HeraPheriCoin");
  accounts = await ethers.getSigners();
});

describe("Deployment", async () => {
  it("Should have correct name and symbol", async () => {
    const name = await myToken.name();
    const symbol = await myToken.symbol();

    expect(name).to.equal("HeraPheriCoin");
    expect(symbol).to.equal("HPC");
  });

  it("should have the correct total supply", async () => {
    const totalSupply = await myToken.totalSupply();
    expect(totalSupply).to.equal(ethers.parseEther("70000000"));
  });

  it("should assign the initial supply to the deployer", async () => {
    const deployerBalance = await myToken.balanceOf(accounts[0]);
    expect(deployerBalance).to.equal(ethers.parseEther("70000000"));
  });
});

describe("Transfer and approve", async () => {
  it("should transfer tokens between accounts", async () => {
    const transferAmount = ethers.parseEther("10000000");

    await myToken.transfer(accounts[1], transferAmount);

    const senderBalance = await myToken.balanceOf(accounts[0]);
    const receiverBalance = await myToken.balanceOf(accounts[1]);

    expect(senderBalance).to.equal(ethers.parseEther("60000000"));
    expect(receiverBalance).to.equal(ethers.parseEther("10000000"));
  });

  it("should allow an owner to approve another account to spend their tokens", async () => {
    const owner = accounts[0];
    const spender = accounts[2];
    const approveAmount = ethers.parseEther("10000000");

    await myToken.approve(spender, approveAmount);

    const allowance = await myToken.allowance(owner, spender);
    expect(allowance).to.equal(approveAmount);
  });
});
