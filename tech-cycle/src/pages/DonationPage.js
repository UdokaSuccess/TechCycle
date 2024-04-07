import React from 'react'
import Navbar from '../Navbar'
import Donate from './Donate'
import DonateForm from './DonateForm'
import Footer from './Footer'

function DonationPage() {
  return (
    <div>
        <Navbar/>
        <Donate/>
        <DonateForm/>
        <Footer/>
    </div>
  )
}

export default DonationPage