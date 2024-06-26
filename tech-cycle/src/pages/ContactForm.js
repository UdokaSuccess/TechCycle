import React from 'react'
import image from '../pages/images/contactimg.png'

function ContactForm() {
  return (
    <div className='contact'>
      <div className='contact-form'>
      <h5>Contact Us By Email <br />
      <div className='contact-form-horizon'></div>
      </h5>
        <p>please complete the form below with your details, and we will try to respond to you as swiftly as we can.</p>
      </div>
      <div className='contactformsec'>
        <div className='contactform'>
        <form>   
        <div className='ContactInput'>
            <label>Full Name</label>
            <input type='text' id='fname'/>
            </div> 
            <div className='ContactInput'>
            <label>Email Address</label>
            <input type='email' id='email'/>
            </div>
            <div className='contact-textarea'>
            <label>Complaint</label>
            <textarea cols={10} rows={12}></textarea>
            </div>
            <input type='submit' className='button' />
            </form>
        </div>
        <div className='contact-img'>
          <img src={image} alt='contact-us-img'></img>
        </div>
        </div>
    </div>
  )
}

export default ContactForm