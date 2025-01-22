// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Login from './pages/Login/Index';
import Home from './pages/Home/Index';
import Register from './pages/Register/Index';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>

   </Routes>
   </BrowserRouter>

   </>
  );
}

export default App;
