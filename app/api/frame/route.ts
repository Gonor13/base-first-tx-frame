import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const baseUrl = "https://base-first-tx-frame-27p5.vercel.app"
  
  try {
    const data = await request.json()
    const inputText = data.untrustedData?.inputText || ""
    
    // ТЕСТОВЫЙ ОТВЕТ - просто показываем что получили
    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta property="fc:frame" content="vNext" />
  <meta property="fc:frame:image" content="${baseUrl}/og-image.png" />
  <meta property="fc:frame:button:1" content="Try Again" />
  <meta property="fc:frame:button:1:action" content="post" />
  <meta property="fc:frame:post_url" content="${baseUrl}/api/frame" />
  <title>Base First TX - Result</title>
</head>
<body>
  <h1>Received address: ${inputText}</h1>
  <p>Working on NFT mint...</p>
</body>
</html>
    `
    
    return new NextResponse(html, {
      headers: { 'Content-Type': 'text/html' }
    })
  } catch (error) {
    // Если ошибка - редирект на начало
    return NextResponse.redirect(baseUrl)
  }
}

// GET запросы на /api/frame просто редиректят на главную
export async function GET() {
  return NextResponse.redirect("https://base-first-tx-frame-27p5.vercel.app")
}
