import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.scss'; // Global styles for the application
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
