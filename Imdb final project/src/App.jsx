// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import NavBar1 from "./Components/NavBar1"
import Home1 from "./Components/Home1"
import Watchlist1 from "./Components/Watchlist1"
import './App.css'
import { Route, Routes } from "react-router-dom"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
   <NavBar1 />
   <Routes >
    <Route path="/" element={<Home1 />} />
    <Route path="/watchlist1" element={<Watchlist1 />} />
   </Routes>
    </>
  )
}

export default App
