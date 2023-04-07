import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './normalize.css'
import './trmd3.css'
import './trmd3-specific.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
