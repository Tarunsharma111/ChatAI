import './App.css';
import {Routes, Route } from "react-router";
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Summary from './pages/Summary';
import Paragraph from './pages/Paragraph';
import ChatBot from './pages/ChatBot';
import JsConverter from './pages/JsConverter';
import ScifiImage from './pages/ScifiImage';
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
    <Route path="/summary" element={<Summary />} />
          <Route path="/paragraph" element={<Paragraph />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/js-converter" element={<JsConverter />} />
          <Route path="/scifi-image" element={<ScifiImage />} />
    </Routes>
    </>
  );
}

export default App;
