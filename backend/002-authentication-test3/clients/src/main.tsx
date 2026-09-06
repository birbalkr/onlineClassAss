import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthRoutesApp from './routes/auth.routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthRoutesApp />
  </StrictMode>,
)
