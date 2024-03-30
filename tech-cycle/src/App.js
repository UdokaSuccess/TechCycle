import React from "react";
import Landing from "./pages/Landing";
import Navbar from "./Navbar";
import DonationPage from "./pages/DonationPage";
import Receiver from "./pages/Receiver";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from "./pages/About"
import Signup from './pages/SignUp';
import Login from "./pages/Login";



function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/donate" element={<DonationPage/>} />
      <Route path="/receiver" element={<Receiver />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />




    </Routes>
    </BrowserRouter>
  )
}

export default App;
