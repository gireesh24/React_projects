// import React from 'react'

import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import WatchList from "./Components/WatchList"
import Navbar from "./Components/Navbar"


function ImdbApp() {
  return (
    <>
    <Navbar />
    <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/WatchList" element={<WatchList />} />
    </Routes>
    </>
  )
}

export default ImdbApp