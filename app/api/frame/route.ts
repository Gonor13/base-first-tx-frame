import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
  
  return NextResponse.json({
    type: "frame",
    frame: {
      version: "next",
      image: `${baseUrl}/og-image.png`,
      input: {
        text: "Enter Base address (0x...)"
      },
      buttons: [
        {
          label: "Find First TX",
          action: "post"
        }
      ],
      postUrl: `${baseUrl}/api/frame`
    }
  });
}

export async function POST(request: NextRequest) {
  const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
  
  try {
    const data = await request.json();
    const buttonIndex = data.untrustedData?.buttonIndex;
    const inputText = data.untrustedData?.inputText || "";

    if (buttonIndex === 1 && inputText) {
      return NextResponse.json({
        type: "frame",
        frame: {
          version: "next",
          image: `${baseUrl}/og-image.png`,
          buttons: [
            {
              label: "Try Another",
              action: "post"
            }
          ],
          postUrl: `${baseUrl}/api/frame`
        }
      });
    }

    return GET();
    
  } catch (error) {
    return NextResponse.json({
      type: "frame",
      frame: {
        version: "next",
        image: `${baseUrl}/og-image.png`,
        buttons: [
          {
            label: "Restart",
            action: "post"
          }
        ],
        postUrl: `${baseUrl}/api/frame`
      }
    });
  }
}
