"use client";

import { MOCK_TOKEN_ADDRESS, MOCK_USDC_ABI } from "@/abii/mock-usdc-abi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useReadContracts } from "wagmi";

export default function Home() {
  const account = useAccount();

  const { data } = useReadContracts({
    contracts: [
      {
        abi: MOCK_USDC_ABI,
        address: MOCK_TOKEN_ADDRESS,
        functionName: "name",
      },
      {
        abi: MOCK_USDC_ABI,
        address: MOCK_TOKEN_ADDRESS,
        functionName: "symbol",
      },
      {
        abi: MOCK_USDC_ABI,
        address: MOCK_TOKEN_ADDRESS,
        functionName: "decimals",
      },
      {
        abi: MOCK_USDC_ABI,
        address: MOCK_TOKEN_ADDRESS,
        functionName: "balanceOf",
        args: [account.address as `0x${string}`],
      },
    ],
  });

  const name: any = data?.[0].result;
  const symbol: any = data?.[1].result;
  const decimals: any = data?.[2].result;
  const balanceUser: any = data?.[3].result;
  console.log("data", data);
  console.log("name", name);
  console.log("symbol", symbol);
  console.log("decimals", decimals);

  return (
    <div>
      <ConnectButton />
      <p>Token Name : {name}</p>
      <p>Symbol: {symbol}</p>
      <p>Decimals: {decimals}</p>
      <p>balanceUser : {balanceUser}</p>
    </div>
  );
}
