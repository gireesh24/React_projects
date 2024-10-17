// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Provider} from "react-redux"
import store from './redux/store';
import ProtectedRoute from './components/ProtectedRoute';
import Admin from './pages/Admin';
import Partner from './pages/Partner';
import Profile from './pages/Profile';



function App() {
  return (
    <div className="App">
     {/* hello react + ant */}
     <Provider store={store}>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={ 
        <ProtectedRoute>
          <Home />
          </ProtectedRoute>
          }
          />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
      <Route path="/partner" element={<ProtectedRoute><Partner /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

     </Routes>
     </BrowserRouter>
     </Provider>
    </div>
  );
}

export default App;
