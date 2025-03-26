import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "./i18n";

document.documentElement.classList.remove("dark");

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )