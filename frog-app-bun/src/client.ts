import { createThirdwebClient, defineChain } from "thirdweb";


export const client = createThirdwebClient({
  clientId: "7a10bef013f39bbf3ee9edc7833fdc04",
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
