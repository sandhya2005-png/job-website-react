import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'    // or './main.css' — whichever file you put the directives in

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
