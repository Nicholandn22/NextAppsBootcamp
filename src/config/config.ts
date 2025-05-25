import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { arbitrumSepolia } from "viem/chains";

export const config = getDefaultConfig({
  appName: 'Batch 4 Demo',
  projectId: process.env.WALLET_CONNECT_PROJECT_ID || "demo-id",
  chains: [arbitrumSepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});