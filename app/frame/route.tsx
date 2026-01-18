import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://base-first-tx-frame.vercel.app/og-image.svg" />
      <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
      <meta property="fc:frame:input:text" content="Enter Base address (0x...)" />
      <meta property="fc:frame:button:1" content="🚀 Find First TX" />
      <meta property="fc:frame:button:1:action" content="post" />
      <meta property="fc:frame:post_url" content="https://base-first-tx-frame.vercel.app/api/frame" />
      
      <meta property="og:title" content="Base First TX Frame" />
      <meta property="og:description" content="Mint your first Base transaction as NFT" />
      <meta property="og:image" content="https://base-first-tx-frame.vercel.app/og-image.svg" />
      <meta name="twitter:card" content="summary_large_image" />
      <title>Base First TX Frame</title>
    </head>
    <body>
      <h1>Base First TX Frame</h1>
      <p>Share this link in Warpcast to see the interactive frame!</p>
      <p>Direct link: <a href="https://base-first-tx-frame.vercel.app/frame">https://base-first-tx-frame.vercel.app/frame</a></p>
    </body>
  </html>
  `
  
  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  })
}
