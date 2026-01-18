"use client"

import { useEffect } from 'react'
import { MiniAppSDK } from '@farcaster/mini-apps-sdk'
import type { Metadata } from 'next'

// Мета-теги для Frame (работают и для Mini App)
export const metadata: Metadata = {
  title: 'Base First TX Frame',
  description: 'Mint your first Base transaction as NFT',
  openGraph: {
    title: 'Base First TX Frame',
    description: 'Mint your first Base transaction as NFT',
    images: ['https://base-first-tx-frame.vercel.app/og-image.svg'],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': 'https://base-first-tx-frame.vercel.app/og-image.svg',
    'fc:frame:input:text': 'Enter Base address (0x...)',
    'fc:frame:button:1': '🚀 Find First TX',
    'fc:frame:button:1:action': 'post',
    'fc:frame:post_url': 'https://base-first-tx-frame.vercel.app/api/frame',
  },
}

export default function Home() {
  useEffect(() => {
    // Инициализация Mini App
    const initializeMiniApp = async () => {
      try {
        const sdk = new MiniAppSDK()
        await sdk.actions.ready()
        console.log('✅ Mini App ready!')
        
        // Можно добавить логику Mini App здесь
        sdk.on('frameAction', (data) => {
          console.log('Frame action received:', data)
        })
      } catch (error) {
        console.error('Mini App SDK error:', error)
      }
    }
    
    initializeMiniApp()
  }, [])
  
  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'sans-serif',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h1>Base First TX Frame</h1>
      <p>Mini App + Frame in one!</p>
      
      <div style={{ 
        background: '#f5f5f5', 
        padding: '15px', 
        borderRadius: '10px',
        margin: '20px 0'
      }}>
        <h3>How it works:</h3>
        <ol>
          <li>Enter your Base address (0x...)</li>
          <li>Find your first transaction on Base</li>
          <li>Mint it as NFT (coming soon)</li>
        </ol>
      </div>
      
      <div style={{ 
        background: '#e8f5e9', 
        padding: '15px', 
        borderRadius: '10px',
        margin: '20px 0'
      }}>
        <p><strong>📱 As Mini App:</strong> Open in Warpcast Mini Apps</p>
        <p><strong>🖼️ As Frame:</strong> Share as interactive post</p>
      </div>
      
      <button 
        onClick={() => alert('Mini App button clicked!')}
        style={{
          padding: '10px 20px',
          background: '#0052FF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Test Mini App Button
      </button>
    </div>
  )
}
