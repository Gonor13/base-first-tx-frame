export interface Transaction {
  hash: string;
  blockNumber: number;
  timestamp: number;
  from: string;
  to: string;
  value: string;
  gasPrice: string;
  gasUsed: string;
  method?: string;
  status: "success" | "failed";
}

export async function getFirstTransaction(address: string): Promise<Transaction | null> {
  // Мок данные для теста
  return {
    hash: "0x" + Math.random().toString(16).slice(2, 66),
    blockNumber: Math.floor(Math.random() * 10000000),
    timestamp: Date.now() - Math.floor(Math.random() * 10000000000),
    from: address,
    to: "0x" + Math.random().toString(16).slice(2, 42),
    value: (Math.random() * 1).toFixed(6),
    gasPrice: (Math.random() * 100).toFixed(2),
    gasUsed: (21000 + Math.random() * 100000).toFixed(0),
    method: Math.random() > 0.5 ? "Transfer" : "Contract Call",
    status: "success"
  };
}
