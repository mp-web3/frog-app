import { client, lineaSepolia } from "./client";
import { getContract } from "thirdweb";

export const frogJumpContract = getContract({
  client,
  chain: lineaSepolia,
  address: "0x450aa163ae2c4888e3b0c9696916ee341dfbb157",
  abi: [
    {
      type: "constructor",
      inputs: [{ name: "name_", type: "string", internalType: "string" }],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "jump",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "jumps",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "name",
      inputs: [],
      outputs: [{ name: "", type: "string", internalType: "string" }],
      stateMutability: "view",
    },
  ],
});