import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChatProvider } from './assets/context/ChatContext'
import { RouterApp } from './assets/router/RouterApp'

// main styles
import "./assets/styles/main.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChatProvider>
      <RouterApp />
    </ChatProvider>
  </StrictMode>,
)