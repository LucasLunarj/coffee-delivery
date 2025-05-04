import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.tsx'
import { CoffeeDeliveryProvider } from './contexts/CoffeeDeliveryContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CoffeeDeliveryProvider>
    <App />
    </CoffeeDeliveryProvider>
  </StrictMode>,
)
