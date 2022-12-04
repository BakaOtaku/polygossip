import { ethers } from "ethers";

export const getWallet = () => {
  const privateKey = process.env.PRIVATE_KEY || "";
  const provider = process.env.PROVIDER as any;
  const wallet = new ethers.Wallet(privateKey, provider);
  return wallet;
};
