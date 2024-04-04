import React from 'react'
import Navbar from './Navbar'
import ContactBody from './pages/ContactBody'
import Footer from "./pages/Footer"

function ContactUs() {
  return (
    <section>
      <Navbar/>
 <div className='contact-hero'>
    <p>Contact T-Cycle</p>
 </div>
 <ContactBody />
<Footer/>
    </section>
   
  )
}

export default ContactUs