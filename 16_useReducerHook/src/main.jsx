import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppContext from './AppContext'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AppContext>
        <App />
      </AppContext>
  </StrictMode>,
)
