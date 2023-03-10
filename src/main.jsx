import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FontContextWrapper } from './context/FontContext/FontProvider'
import { ThemeContextWrapper } from './context/ThemeContext/ThemeProvider'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextWrapper>
      <FontContextWrapper>
        <App />
      </FontContextWrapper>
    </ThemeContextWrapper>
  </React.StrictMode>
)
