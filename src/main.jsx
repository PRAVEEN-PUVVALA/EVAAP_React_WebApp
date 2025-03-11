import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SignupForm from './EVAAP'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <SignupForm />
  </StrictMode>,
)
