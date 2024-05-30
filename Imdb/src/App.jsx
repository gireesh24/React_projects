import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.google.com/imgres?q=gireesh%20image&imgurl=https%3A%2F%2Fwww.prokerala.com%2Fkids%2Fbaby-names%2Fimgs%2Fgireesh-24634.png&imgrefurl=https%3A%2F%2Fwww.prokerala.com%2Fkids%2Fbaby-names%2Fgireesh-24634.html&docid=nJHkqzSUpeHoTM&tbnid=tfrLXFGcGNg24M&vet=12ahUKEwio3ZSP6LWGAxV44TgGHRToCJ8QM3oECBMQAA..i&w=620&h=360&hcb=2&ved=2ahUKEwio3ZSP6LWGAxV44TgGHRToCJ8QM3oECBMQAA" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
