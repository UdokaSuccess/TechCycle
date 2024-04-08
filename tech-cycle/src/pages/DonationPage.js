import React from 'react'
import Navbar from '../Navbar'
import Donate from './Donate'
import DonateForm from './DonateForm'
import Footer from './Footer'

function DonationPage({handleEmail, handleFullName, handleLaptopName, handleLaptopSpecs, handlePics, devicename, devicespecs, submitbtn}) {
  return (
    <div>
        <Navbar/>
        <Donate/>
        <DonateForm handleEmail={handleEmail} handleFullName={handleFullName} handleLaptopName={handleLaptopName} handleLaptopSpecs={handleLaptopSpecs} handlePics={handlePics} devicename={devicename}  devicespecs={devicespecs}  submit={submitbtn}/>
        <Footer/>
    </div>
  )
}

export default DonationPage