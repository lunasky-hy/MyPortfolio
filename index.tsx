import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/stylesheets/index.css'
import PortfolioMain from './src/pages/PortfolioMain'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PortfolioMain />
  </StrictMode>,
)
