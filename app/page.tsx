import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Base First TX Frame',
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': 'https://placehold.co/600x400/000000/FFFFFF.png',
    'fc:frame:input:text': 'Enter Base address (0x...)',
    'fc:frame:button:1': '🚀 Find First TX',
    'fc:frame:button:1:action': 'post',
    'fc:frame:post_url': 'https://base-first-tx-frame-27p5.vercel.app/api/frame',
  },
}

export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Base First TX Frame</h1>
      <p>Open in Warpcast to mint your first Base transaction as NFT</p>
    </div>
  )
}
