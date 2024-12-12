// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import {Provider} from 'react-redux';
import store from './redux/store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
<BrowserRouter>
<Routes>
  <Route path="/"
   element={
   <ProtectedRoute>
    <Home />
    </ProtectedRoute>
    }/>
  <Route path="/login" element={<Login />}/>
  <Route path="/register" element={<Register />}/>
  <Route path="/admin" element={<Admin />}/>

</Routes>
</BrowserRouter>
</Provider>
    </div>
  );
}

export default App;
