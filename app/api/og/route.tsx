import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address");

  // Простой JSON ответ вместо изображения
  return NextResponse.json({
    text: address 
      ? `Base First TX - Address: ${address.slice(0, 10)}...`
      : "Base First TX - Enter your Base address",
    address: address
  });
}
