import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Base First TX Frame',
  description: 'Mint your first Base transaction as NFT',
  openGraph: {
    title: 'Base First TX Frame',
    description: 'Mint your first Base transaction as NFT',
    images: ['https://base-first-tx-frame.vercel.app/og-image.svg'],
  },
  other: {
    'fc:frame': { property: 'fc:frame', content: 'vNext' },
    'fc:frame:image': { property: 'fc:frame:image', content: 'https://base-first-tx-frame.vercel.app/og-image.svg' },
    'fc:frame:input:text': { property: 'fc:frame:input:text', content: 'Enter Base address (0x...)' },
    'fc:frame:button:1': { property: 'fc:frame:button:1', content: '🚀 Find First TX' },
    'fc:frame:button:1:action': { property: 'fc:frame:button:1:action', content: 'post' },
    'fc:frame:post_url': { property: 'fc:frame:post_url', content: 'https://base-first-tx-frame.vercel.app/api/frame' },
    'og:image': { property: 'og:image', content: 'https://base-first-tx-frame.vercel.app/og-image.svg' },
    'og:title': { property: 'og:title', content: 'Base First TX Frame' },
    'og:description': { property: 'og:description', content: 'Mint your first Base transaction as NFT' },
    'twitter:card': { property: 'twitter:card', content: 'summary_large_image' },
    'twitter:title': { property: 'twitter:title', content: 'Base First TX Frame' },
    'twitter:description': { property: 'twitter:description', content: 'Mint your first Base transaction as NFT' },
    'twitter:image': { property: 'twitter:image', content: 'https://base-first-tx-frame.vercel.app/og-image.svg' },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
