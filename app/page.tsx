import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Base First TX Frame",
  description: "Find your first Base transaction and mint it as NFT. Works in Farcaster/Warpcast.",
  openGraph: {
    title: "Base First TX Frame",
    description: "Find your first Base transaction and mint it as NFT",
    images: ["/og-image.png"],
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "http://localhost:3000/og-image.png",
    "fc:frame:input:text": "Enter your Base address",
    "fc:frame:button:1": "🚀 Find First TX",
    "fc:frame:post_url": "http://localhost:3000/api/frame",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Base First TX Frame</h1>
        <p className="text-lg mb-4">
          Find your first Base transaction and mint it as NFT. Works in Farcaster/Warpcast.
        </p>
        
        <div className="bg-gray-100 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-4">How to Use:</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Copy Frame URL below</li>
            <li>Post on Warpcast</li>
            <li>Users enter their Base address</li>
            <li>Find first transaction</li>
            <li>Mint as NFT (coming soon)</li>
          </ol>
        </div>
        
        <div className="mt-8 p-4 border rounded bg-blue-50">
          <p className="font-bold">Frame URL:</p>
          <code className="block mt-2 p-2 bg-gray-800 text-white rounded">
            http://localhost:3000
          </code>
        </div>
      </div>
    </main>
  );
}
