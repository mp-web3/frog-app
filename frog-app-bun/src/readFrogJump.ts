import { frogJumpContract } from "./frogJumpContract";
import { readContract } from "thirdweb";

async function main() {
  const jumpsNum = await readContract({
    contract: frogJumpContract,
    method: "jumps",
  });

  console.log("Number of jumps:", jumpsNum);
}

main().catch((err) => {
  console.error("Error:", err);
});