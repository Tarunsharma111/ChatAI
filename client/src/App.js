import './App.css';
import {Routes, Route } from "react-router";
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <Navbar />
    <Toaster />
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    </Routes>
    </>
  );
}

export default App;
