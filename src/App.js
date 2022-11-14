import logo from './logo.svg';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Navbar from './components/Navbar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { checkSession } from './redux/auth/auth.actions';
import AuthRoute from './components/AuthRoute';

function App() {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    token && dispatch(checkSession(token,navigate))
  }, [])
  return (
    <div className="app">
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/about" element={<AuthRoute component={<About/>} />}/>
      </Routes>
    </div>
  );
}

export default App;
