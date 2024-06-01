// import React from 'react'

import { Link } from "react-router-dom"
import MovieLogo from './movie.jpg';


function Navbar() {
  return (
    <>
    <Link to="/">
        <img src= {MovieLogo} />
    </Link>
    <Link to="/">Movies</Link>
    <Link to="/Watchlist">WatchList</Link>
    </>
)   
}

export default Navbar