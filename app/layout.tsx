import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Base First TX Frame',
  description: 'Mint your first Base transaction as NFT',
  openGraph: {
    title: 'Base First TX Frame',
    description: 'Mint your first Base transaction as NFT',
    images: ['https://base-first-tx-frame.vercel.app/og-image.svg'],
  },
  // ⚠️ УБРАЛИ МЕТА-ТЕГИ ФРЕЙМА ОТСЮДА!
  // Они будут в отдельном файле
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
