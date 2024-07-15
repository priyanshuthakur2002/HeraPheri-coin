"use server";

import { ethers } from "ethers";
import artifacts from "./../../../artifacts/contracts/HeraPheriCoin.sol/HeraPheriCoin.json";

export default async function Transfer(address) {
  try {
    if (ethers.isAddress(address)) {
      const transferAmount = ethers.parseEther("0.5");
      const Provider = new ethers.getDefaultProvider("sepolia");
      const signer = new ethers.Wallet(process.env.PRIVATE_KEY, Provider);
      const abi = artifacts.abi;
      const contract = new ethers.Contract(process.env.Token_ADD, abi, signer);
      await contract.transfer(address, transferAmount);
      console.log("Transaction successful!");
      return 1;
    } else {
      console.log("Invalid address");
      return -1;
    }
  } catch (e) {
    console.log(e);
    return 0;
  }
}
