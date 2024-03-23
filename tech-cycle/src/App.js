import React from "react";
import Landing from "./pages/Landing";
import Navbar from "./Navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Landing/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
