// import React from 'react'

import { Link } from "react-router-dom"
import MovieLogo from "../assets/movie.jpg";
// import viteLogo from '/vite.svg'

function Navbar() {
  return (
    <>
    <div className="flex space-x-8 items-center pl-3 py-4">
    <Link to="/">
        <img className="w-[50px]" src= {MovieLogo} />
    </Link>
  
    <Link className="text-blue-500 text-3xl font-bold" to="/">Movies </Link>
    <Link className="text-blue-500 text-3xl font-bold" to="/Watchlist">WatchList</Link>
    </div>
    </>
)   
}

export default Navbar