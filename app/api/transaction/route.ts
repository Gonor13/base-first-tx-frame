import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const address = searchParams.get("address");

  if (!address) {
    return NextResponse.json({ error: "Address required" }, { status: 400 });
  }

  try {
    // Мок данные для теста
    return NextResponse.json({
      address,
      firstTransaction: {
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
      },
      totalTransactions: Math.floor(Math.random() * 100)
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ 
      error: "Failed to fetch transactions" 
    }, { status: 500 });
  }
}
