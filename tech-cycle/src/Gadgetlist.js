import React from 'react'
import Navbar from './Navbar'
import LaptopItems from './pages/Gadgets'
import Footer from './pages/Footer'

function Gadgetlist({isLoggedIn}) {
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn}/>
      <LaptopItems/>
      <Footer/>
    </div>
  )
}

export default Gadgetlist