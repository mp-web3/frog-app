import { frogJumpContract } from "./frogJumpContract";
import { prepareContractCall } from "thirdweb";
import { sendTransaction, waitForReceipt } from "thirdweb";
import { createWallet } from "thirdweb/wallets";
import { client } from "./client";


async function main() {
  const wallet = {
    connect: async () => {
      // Simulate wallet connection logic
      return {
        address: "0x9c03Ce240E2D6EEB70B7Ebe73B1289EF4ecBF5A6", // Simulated wallet address
        // Other wallet details as needed
      };
    },
  };
    


  // connect the wallet, this returns a promise that resolves to the connected account
  // Connect the wallet and get the account
    const account = await wallet.connectPrivateKey();
    
    console.log("Connected account:", account.address);

  const increaseJumps = prepareContractCall({
    contract: frogJumpContract,
    method: "jump",
    // Since "jump" takes no parameters, there's no need for params here
  });

  try {
    // Sign and send the prepared transaction using the account
    const { transactionHash } = await sendTransaction({
      transaction: increaseJumps, // Use increaseJumps.transaction
      account,
    });

    console.log("Transaction Hash:", transactionHash);
  } catch (error) {
    console.error("Error sending transaction:", error);
  }
}

main().catch((err) => {
  console.error("Error:", err);
});