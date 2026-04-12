import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
/* Global site + Home styles — imported last so base theme wins over nothing;
   route-specific CSS is scoped under .page-* wrappers to avoid cross-route overrides. */
import './assets/css/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
