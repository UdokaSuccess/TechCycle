import React from 'react'
import { TiTick } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { IoMdCloseCircle } from "react-icons/io";


const closePopup = () =>{
  document.getElementsByClassName('popup')[0].style.display = "none"
  document.getElementsByClassName('dim-pg')[0].style.display = "none"
}
// Donor@techcycle.com
function Popup() {
  return (
    <div className="popup">
    <div className='popup-container'>
    <IoMdCloseCircle size={48} className='btn-close' onClick={closePopup} />
     {/* <button className='btn-close' onClick={closePopup}>Close</button> */}
     
    <TiTick  size={64} color='white' style={{backgroundColor: '#2a7e3a', borderRadius: '50%'}}/>
      <h2>Thank You!</h2>
      <p>Your donation is being processed. You will recieve an email with details on pickup within two days.</p>
      <Link to='/'><button className='btn' >Back to Home</button></Link>
      <Link to='/gadgets'><button className='btn' >View Donation</button></Link>
    </div>
  </div>
  )
}

export default Popup;