import React from 'react'
import { TiTick } from "react-icons/ti";
import { Link } from 'react-router-dom';


const closePopup = () =>{
  document.getElementsByClassName('popup')[0].style.display = "none"
  document.getElementsByClassName('dim-pg')[0].style.display = "none"
}

function Popup() {
  return (
    <div className="popup">
    <div className='popup-container'>
     <button className='btn-close' onClick={closePopup}>Close</button>
    <TiTick  size={64} color='white' style={{backgroundColor: '#2a7e3a', borderRadius: '50%'}}/>
      <h2>Thank You!</h2>
      <p>This form is monitored by our team. If you don't hear back from us within 2 business days,<br></br> please feel free to send a follow-up email to Donor@techcycle.com.</p>
      <Link to='/'><button className='btn' >Back to Home</button></Link>
      <Link to='/gadgets'><button className='btn' >View Donation</button></Link>
    </div>
  </div>
  )
}

export default Popup;