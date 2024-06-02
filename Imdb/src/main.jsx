import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
// import MyApp from './MyApp.jsx'
import { BrowserRouter } from 'react-router-dom'
import ImdbApp from './ImdbApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ImdbApp />
    </BrowserRouter>
  </React.StrictMode>,
)
