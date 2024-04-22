import { createThirdwebClient, defineChain } from "thirdweb";

// Client Server-Side
export const client = createThirdwebClient({
  secretKey: process.env.THIRDWEB_SECRET_KEY_FROG_APP,
});

export const lineaSepolia = defineChain({
  id: 1,
  name: "linea-sepolia",
  rpc: process.env.SEPOLIA_LINEA_RPC_URL,
  nativeCurrency: {
    name: "LineaETH",
    symbol: "LineaETH",
    decimals: 18,
  },
  testnet: true,
});
