// import React from 'react'

import { Link } from "react-router-dom"
import movielogo from '../movieimage.jpeg' 

function NavBar1() {
  return (
    <div className=" flex space-x-8 items-center pl-3 py-4">
        <Link to="/">
            <img className=" w-[50px] h-[50px]" src={movielogo} />
        </Link>
        <Link className="text-blue-500 text-3xl font-bold" to="/">Movies</Link>
        <Link className="text-blue-500 text-3xl font-bold"  to="/watchlist">Watchlist</Link>
    </div>
  );
}

export default NavBar1