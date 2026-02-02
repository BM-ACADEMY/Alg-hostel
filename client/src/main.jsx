import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
// 1. IMPORT THIS
import { HelmetProvider } from 'react-helmet-async'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. WRAP EVERYTHING HERE */}
    <HelmetProvider>
      <BrowserRouter>
         <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)