'use client'

import {
  Button,
  Card,
  Input,
  Tag,
  Alert,
  InkLayout,
  InkPanel
} from "@inkonchain/ink-kit";

// Token information component
function TokenContent() {
  const TOKEN_INFO = {
    name: "YOUR_TOKEN_NAME",
    symbol: "TKN",
    totalSupply: "1,000,000",
    currentPrice: "0.001",
    network: "Ink Layer 2",
    description: "Your token description goes here. Explain what makes your token unique and valuable.",
  };

  return (
    <InkPanel className="ink:p-4">
      <Card>
        <h2 className="ink:text-xl ink:font-bold ink:mb-4">{TOKEN_INFO.name}</h2>
        <div className="ink:space-y-2">
          <p><strong>Symbol:</strong> {TOKEN_INFO.symbol}</p>
          <p><strong>Total Supply:</strong> {TOKEN_INFO.totalSupply}</p>
          <p><strong>Current Price:</strong> {TOKEN_INFO.currentPrice}</p>
          <p><strong>Network:</strong> {TOKEN_INFO.network}</p>
          <p className="ink:mt-4">{TOKEN_INFO.description}</p>
        </div>
      </Card>
    </InkPanel>
  );
}

// Main page component
export default function Home() {
  return (
    
      <TokenContent />
    
  );
}