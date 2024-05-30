// import React from 'react'


import Home from './Pages/Home'
import About from './Pages/About'
import Menu from './Pages/Menu'
import { Route, Routes } from 'react-router-dom'
function Router(){
   <Routes>

        <Route path='/' element={<Home />}></Rou>
        <Route path='/about' element={<About />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        </Routes>

}

function MyApp() {
  return (
    <>
    <nav>
        <ul>
            {/* <li><link to="/">Home</link></li>
            <li><link to="/">About</link></li>
            <li><link to="/">Menu</link></li> */}
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>

        </ul>
    </nav>
    <Router />
    </>
  )
}

export default MyApp