// import React from 'react'

import { Route, Routes } from "react-router-dom"
import Navbar from "../../Imdb Clone/src/Components/Navbar"
import Home from "./Pages/Home"
import WatchList from "./Components/WatchList"

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