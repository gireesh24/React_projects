// import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Menu from './Pages/Menu'
import NotFound from './Pages/NotFound'
import User from './Pages/User'

function Router(){
return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/user/:id" element={<User />}></Route>
    </Routes>
)
}
function MyApp() {
  return (

    <>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Home</Link></li>
            <li><Link to="/user/1">user1</Link></li>
            <li><Link to="/user/2">user2</Link></li>
        </ul>
    </nav>
    <Router />
    </>
  )
}

export default MyApp