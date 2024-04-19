import { frogJumpContract } from "./frogJumpContract";
import { prepareContractCall } from "thirdweb";

async function increaseJumps() {
  // Assuming your "jump" method takes no parameters
  const increaseJumps = prepareContractCall({
    contract: frogJumpContract,
    // Pass the method signature that you want to call
    method: "jump",
    // Since "jump" takes no parameters, there's no need for params here
  });

  // Now you can use increaseJumps
  console.log("Prepared transaction:", increaseJumps);
  // You can now send this prepared transaction to the blockchain
}

increaseJumps().catch((err) => {
  console.error("Error:", err);
});
