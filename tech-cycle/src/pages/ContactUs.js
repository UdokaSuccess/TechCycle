import React from 'react'
import ContactBody from './ContactBody'
import Footer from "../pages/Footer"
import Navbar from '../Navbar'

function ContactUs() {
  return (
    <section>
    <Navbar />
 <div className='contact-hero'>
    <p>Contact T-Cycle</p>
 </div>
 <ContactBody />
 <Footer />

    </section>
   
  )
}

export default ContactUs