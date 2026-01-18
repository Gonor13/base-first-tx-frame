import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const baseUrl = "https://base-first-tx-frame-27p5.vercel.app";

  try {
    const data = await request.json();
    const buttonIndex = data.untrustedData?.buttonIndex;
    const inputText = data.untrustedData?.inputText || "";

    // Пока простой ответ для теста
    const responseHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta property="fc:frame" content="vNext" />
  <meta property="fc:frame:image" content="${baseUrl}/og-image.png" />
  <meta property="fc:frame:button:1" content="Try Again" />
  <meta property="fc:frame:button:1:action" content="post" />
  <meta property="fc:frame:post_url" content="${baseUrl}/api/frame" />
  <meta property="og:image" content="${baseUrl}/og-image.png" />
  <title>Base First TX Frame - Result</title>
</head>
<body>
  <h1>Received: ${inputText || "no input"}</h1>
</body>
</html>
    `;

    return new NextResponse(responseHtml, {
      headers: {
        "Content-Type": "text/html",
      },
    });

  } catch (error) {
    // Если ошибка - возвращаем начальный фрейм
    const errorHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta property="fc:frame" content="vNext" />
  <meta property="fc:frame:image" content="${baseUrl}/og-image.png" />
  <meta property="fc:frame:input:text" content="Enter Base address (0x...)" />
  <meta property="fc:frame:button:1" content="🚀 Find First TX" />
  <meta property="fc:frame:button:1:action" content="post" />
  <meta property="fc:frame:post_url" content="${baseUrl}/api/frame" />
  <meta property="og:image" content="${baseUrl}/og-image.png" />
  <title>Base First TX Frame</title>
</head>
<body>
  <h1>Error occurred. Try again.</h1>
</body>
</html>
    `;

    return new NextResponse(errorHtml, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  }
}

// GET запросы на /api/frame теперь будут редиректить на корень
export async function GET() {
  return NextResponse.redirect("https://base-first-tx-frame-27p5.vercel.app");
}
