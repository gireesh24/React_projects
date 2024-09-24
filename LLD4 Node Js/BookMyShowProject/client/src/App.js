// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Provider} from "react-redux"
import store from './redux/store';
import ProtectedRoute from './components/ProtectedRoute';


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
     </Routes>
     </BrowserRouter>
     </Provider>
    </div>
  );
}

export default App;
