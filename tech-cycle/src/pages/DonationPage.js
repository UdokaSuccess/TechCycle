import React from 'react'
import Navbar from '../Navbar'
import Donate from './Donate'
import DonateForm from './DonateForm'
import Footer from './Footer'

function DonationPage({handleEmail, handleFullName, handleLaptopName, handleLaptopSpecs, handlePics, devicename, devicespecs, email, submitbtn, popUp}) {
  return (
    <div className='donate-pg'>
        <Navbar/>
        <Donate/>
        <DonateForm handleEmail={handleEmail} handleFullName={handleFullName} handleLaptopName={handleLaptopName} handleLaptopSpecs={handleLaptopSpecs} handlePics={handlePics} devicename={devicename}  devicespecs={devicespecs}  email={email} submit={submitbtn} popUp={popUp}/>
        <Footer/>
    </div>
  )
}

export default DonationPage