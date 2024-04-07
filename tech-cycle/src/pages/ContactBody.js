import React from 'react'
import ContactForm from './ContactForm'

function ContactBody() {
  return (
    <div className='contact-spacing'>
         <div className='contact-body'>
    <h4>Reach Out To Us For Enquiry And Updates.</h4>
    <p>our goal is to address all enquiries within 48 hours. for questions about our organization, please refer to the <a href='/about' target='blank'>About Us </a>
    page. You can explore the full website directly on <a href='#' target='blank'>Our sitemap.</a></p>
    </div>
    <ContactForm />
    </div>
  )
}

export default ContactBody