import React from 'react'
import Navbar from '../Navbar'
import Donate from './Donate'
import DonateForm from './DonateForm'
import Footer from './Footer'

function DonationPage({handleFullName, handleLaptopName, handleLaptopSpecs, handlePics, devicename, devicespecs, submitbtn, popUp}) {
  return (
    <div className='donate-pg'>
        <Navbar/>
        <Donate/>
        <DonateForm handleFullName={handleFullName} handleLaptopName={handleLaptopName} handleLaptopSpecs={handleLaptopSpecs} handlePics={handlePics} devicename={devicename}  devicespecs={devicespecs} submit={submitbtn} popUp={popUp}/>
        <Footer/>
    </div>
  )
}

export default DonationPage