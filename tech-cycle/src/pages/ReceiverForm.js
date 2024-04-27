import React from 'react'
// import ReceiverCta from './ReceiverCta'

function ReceiverForm() {
  return (
    <div className='ReceiveForm'>
        <h2>Recipient Information</h2>
        <form className='donation-form'>
            <div className='ReceiveInput'>
            <label for="fname">Full Name <span className='required'>*</span></label>
            <input type='text' id='fname' required/>
            </div>
            <div className='ReceiveInput'>
            <label for="email">Email Address <span className='required'>*</span></label>
            <input type='email' id='email' required/>
            </div>
            <div className='ReceiveInput'>
            <label for="contactInfo">Contact Information <span className='required'>*</span></label>
            <input type='text' id='contactInfo' required/>
            </div>
            <div className='ReceiveInput'>
            <label for="deliveryAddress">Delivery Address <span className='required'>*</span></label>
            <input type='text' id='deliveryAddress' required/>
            </div>
            <div className='ReceiveInput'>
            <label for="deliveryAddress">Selected Gadget</label>
            <input type='text' id='deliveryAddress' required/>
            </div>
            <div className='ReceiveInput'>
            <label for="deliveryAddress">Gadget Specification</label>
            <input type='text' id='deliveryAddress'/>
            </div>
            <div className='ReceiveRadios'>
              <h4>Are you experiencing a financial hardship?<span className='required'>*</span></h4>
            <label for="yes">
              <input type='radio' id='yes' name='select' required/>yes      
              <input type='radio' id='no' name='select'/> no
            </label>
            </div>
            <div className='ReceiveInput'>
            <label for="deliveryAddress">Please provide a brief explanation</label>
            <textarea cols={10} rows={12} required></textarea>
            </div>
            <div className='ReceiveInput'>
            <h4>Purpose of Device <span className='required'>*</span></h4>
            <label for="deliveryAddress"> How do you intend using the donated laptop?</label>
            <textarea cols={10} rows={8}></textarea>
            </div>
            <div className='ReceiveInput'>
            <h4>Verification <span className='required'>*</span></h4>
            <label for="deliveryAddress">Upload proof of financial need</label>
            <input type='file' required size={80}/>
            </div>
            <div className='ReceiveInput'>
            <label for="deliveryAddress">Upload a valid means of identication</label>
            <input type='file' required size={80}/>
            </div>
            <p>By clicking the box below, you agree to tech cycle's <a href='#' target='_blank'>terms of service</a><span> and </span><a href='#' target='_blank'>Privacy policy</a></p>

            <div className='receiveCta'>
            <input type='checkbox'></input>
            <p>I agree to tech cycle's terms and conditions</p>
             </div>
           <button className='button'>Submit</button>
           </form>
        {/* <ReceiverCta /> */}
    </div>
  )
}

export default ReceiverForm