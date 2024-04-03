import React from 'react'
import ReceiverCta from './ReceiverCta'

function ReceiverForm() {
  return (
    <div className='ReceiveForm'>
        <h4>Recipient Information</h4>
        <form>
            <div className='ReceiveInput'>
            <label for="fname">Full Name</label>
            <input type='text' id='fname'/>
            </div>
            <div className='ReceiveInput'>
            <label for="email">Email Address</label>
            <input type='email' id='email'/>
            </div>
            <div className='ReceiveInput'>
            <label for="contactInfo">Contact Information</label>
            <input type='text' id='contactInfo'/>
            </div>
            <div className='ReceiveInput'>
            <label for="deliveryAddress">Delivery Address</label>
            <input type='text' id='deliveryAddress'/>
            </div>
            <div className='ReceiveInput'>
            <input type='text' id='deliveryAddress'/>
            </div>
            <div className='ReceiveRadios radiobtn'>
            <input type='radio' id='yes'/>
            <label for="yes">yes</label>
            </div >
            <div className='ReceiveRadios'>
            <input type='radio' id='no'/>
            <label for="no">no</label>
            </div>
            <div className='ReceiveRadio'>
            <textarea cols={10} rows={12}></textarea>
            <textarea cols={10} rows={8}></textarea>
            <textarea cols={10} rows={28}></textarea>
            <textarea cols={10} rows={28}></textarea>
            </div>
        </form>
        <ReceiverCta />
    </div>
  )
}

export default ReceiverForm