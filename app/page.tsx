"use client"

import { useEffect, useState } from 'react'
import { MiniAppSDK } from '@farcaster/mini-apps-sdk'

export default function Home() {
  const [sdk, setSdk] = useState(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const initializeMiniApp = async () => {
      try {
        const sdkInstance = new MiniAppSDK()
        setSdk(sdkInstance)
        
        // ОБЯЗАТЕЛЬНО вызываем ready()
        await sdkInstance.actions.ready()
        setIsReady(true)
        console.log('✅ Mini App SDK ready!')
        
        // Подписываемся на события
        sdkInstance.on('frameAction', (data) => {
          console.log('Frame action:', data)
        })
        
        // Получаем контекст
        const context = await sdkInstance.getContext()
        console.log('Context:', context)
        
      } catch (error) {
        console.error('❌ Mini App SDK error:', error)
      }
    }

    initializeMiniApp()
  }, [])
  
  return (
    <div style={{
      padding: '20px',
      fontFamily: 'sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    }}>
      <h1>Base First TX Frame</h1>
      
      <div style={{
        background: 'rgba(255,255,255,0.1)',
        padding: '20px',
        borderRadius: '15px',
        margin: '20px 0',
        backdropFilter: 'blur(10px)'
      }}>
        {isReady ? (
          <>
            <h3>✅ Mini App работает!</h3>
            <p>SDK инициализирован в Warpcast</p>
            <button
              onClick={() => alert('Mini App кнопка работает!')}
              style={{
                padding: '12px 24px',
                background: '#00D395',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px',
                marginTop: '15px'
              }}
            >
              Тест кнопки Mini App
            </button>
          </>
        ) : (
          <>
            <h3>⏳ Загрузка Mini App...</h3>
            <p>Инициализируем SDK в Warpcast</p>
            <div style={{ 
              width: '100%', 
              height: '4px', 
              background: 'rgba(255,255,255,0.2)', 
              marginTop: '15px',
              borderRadius: '2px'
            }}>
              <div style={{
                width: '70%',
                height: '100%',
                background: '#00D395',
                borderRadius: '2px',
                animation: 'loading 1.5s infinite'
              }}></div>
            </div>
          </>
        )}
      </div>
      
      <div style={{
        background: 'rgba(255,255,255,0.1)',
        padding: '20px',
        borderRadius: '15px',
        margin: '20px 0'
      }}>
        <h3>Как использовать:</h3>
        <ol style={{ lineHeight: '1.8' }}>
          <li><strong>Как Mini App</strong>: Открой в Warpcast → Mini Apps</li>
          <li><strong>Как Frame</strong>: Поделись ссылкой <code>https://base-first-tx-frame.vercel.app/frame</code> в касте</li>
          <li>Введи Base адрес (0x...)</li>
          <li>Найди свою первую транзакцию</li>
          <li>Сминть её как NFT (скоро!)</li>
        </ol>
      </div>
      
      <div style={{
        display: 'flex',
        gap: '10px',
        marginTop: '20px'
      }}>
        <a
          href="https://warpcast.com/~/developers/frames"
          target="_blank"
          style={{
            padding: '10px 20px',
            background: '#0052FF',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            flex: 1,
            textAlign: 'center'
          }}
        >
          Проверить Frame
        </a>
        <a
          href="https://base-first-tx-frame.vercel.app/frame"
          style={{
            padding: '10px 20px',
            background: '#8B5CF6',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            flex: 1,
            textAlign: 'center'
          }}
        >
          Открыть Frame
        </a>
      </div>
      
      <style jsx>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  )
}
