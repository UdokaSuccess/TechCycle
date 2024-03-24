import React from 'react'

function DonateForm() {
  return (
    <div className='donation'>
    <h2>Donation Form</h2>
    <small>Thank You for your interest in donating to tech cycle to help transform lives. </small>
    <small>Please complete the form below, our team will reach out to you with instructions on how to proceed with sending your donation</small>
    <form>
        <label>Full Name:</label> <input type='text' required />
        <label>Email Address:</label> <input type='email' required/>
        <label>Location:</label> <input type='text' required/>
        <label>Laptop Specification:</label> <textarea type='text' required></textarea>
        <label>Upload a Photo of Your Laptop</label><input type='file' required/>
        <label>Is your device is working properly? 
        <input type='radio' />Yes <input type='radio' />No
        </label>
       <label><input type='checkbox'/>I want to recieve updates on how my donation is transforming individuals.</label>
        <small>By ticking the box below, you agree to tech cycle's <a href='#'>term's of service</a> and <a href='#'>privacy policy</a></small>
       <label><input type='checkbox'/>I agree to tech cycle's terms and conditions.</label>

    <button className='button'>Submit</button>

    </form>
    </div>
  )
}

export default DonateForm