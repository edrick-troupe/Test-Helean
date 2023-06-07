import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './fonts/Geomanist/geomanist-regular-webfont.woff'
import './fonts/Geomanist/geomanist-regular-webfont.woff2'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
