import React from 'react'
import { FaRegAddressCard } from "react-icons/fa";
import { MdLaptopWindows } from "react-icons/md";
import { MdEngineering } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";


function Mechanism() {
  return (
          <section className='mech-section'>
          <h2>How It Works</h2>
    <div className='row'>
      <div className='col'>
        <div className='icons'><FaRegAddressCard size={88}/></div>
        <h4>Sign Up as a Donor</h4>
        <p>Register and provide necessary information about your device</p>
      </div>
      <FaArrowRight size={32} style={{margin: '8px'}}/>
      <div className='col'>
      <div className='icons'><MdLaptopWindows size={88}/></div>
      <h4>Drop Off Your Device</h4>
      <p>Get the device to our office by mailing or pickUp by our logistics team</p>
      </div>
      <FaArrowRight size={32} style={{margin: '8px'}}/>
      <div className='col'>
      <div className='icons'><MdEngineering  size={88}/></div>
      <h4>IT Support Process</h4>
      <p>Our Proficient IT support will erase your data and solve any technical issues.</p>
      </div>
      <FaArrowRight size={32} style={{margin: '8px'}}/>
      <div className='col'>
      <div className='icons'><TbTruckDelivery  size={88}/></div>
      <h4>Delivery</h4>
      <p>Your device gets delivered to individuals and students who need them </p>
      </div>
      </div>
    </section>
  )
}

export default Mechanism