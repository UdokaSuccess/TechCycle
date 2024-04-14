import React from 'react'
import {Link} from 'react-router-dom'
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
        <div className='icons'><MdLaptopWindows size={72}/></div>
        <h3>Laptop Donations</h3>
        <p>Register and provide necessary information about your device.</p>
        <p>Get the device to our office by mailing or pickUp by our logistics team</p>
      </div>
      <FaArrowRight size={32} style={{margin: '8px'}}/>
      <div className='col'>
      <div className='icons'><MdEngineering  size={72}/></div>
      <h3>Device Refurbishing</h3>
      <p>Our Proficient IT support team will safely erase your data for security.
        <p>They will perform necessary repairs and fix all technical issues</p>
      </p>
      </div>
        <FaArrowRight size={32} style={{margin: '8px'}}/>
        <div className='col'>
      <div className='icons'><FaRegAddressCard size={72}/></div>
      <h3>Qualification</h3>
      <p>Individuals can request for donated laptops.</p>
      <p>Applications undergo assessment based on financial need, and intended laptop usage.</p>
      </div>
      <FaArrowRight size={32} style={{margin: '8px'}}/>
      <div className='col'>
      <div className='icons'><TbTruckDelivery  size={72}/></div>
      <h3>Distribution</h3>
      <p>Your device gets delivered to individuals whose applications were accepted </p>
      <p>Your device will assist successful recipients </p>

      </div>
      </div>
    </section>
  )
}

export default Mechanism