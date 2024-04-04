import React from "react";
import Landing from "./pages/Landing";
import DonationPage from "./pages/DonationPage";
import Receiver from "./pages/Receiver";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from "./pages/About"
import Loginpg from "./Loginpg"
import Signupp from "./Signup2";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/donate" element={<DonationPage/>} />
      <Route path="/receiver" element={<Receiver />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Signupp/>} />
      <Route path="/login" element={<Loginpg/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;