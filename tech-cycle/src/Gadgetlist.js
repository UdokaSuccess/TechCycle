import React from 'react'
import Navbar from './Navbar'
import LaptopItems from './pages/Gadgets'
import Footer from './pages/Footer'

function Gadgetlist({handleSearch}) {
  return (
    <div>
      <Navbar/>
      <LaptopItems handleSearch={handleSearch}/>
      <Footer/>
    </div>
  )
}

export default Gadgetlist