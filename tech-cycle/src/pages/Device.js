import React from 'react'
import img from './images/img10.png'
import { Link } from 'react-router-dom'

function Device() {
  return (
    <section className='dev-section'>
    <div className='row'>
      <div>
        <h2>Device Donation Guidelines</h2>
        <div className='dev'>
        <h3>Accepted Devices: Laptops</h3>
         <ul>
          <li>Apple</li>
          <li>HP</li>
          <li>Samsung</li>
          <li>Lenovo</li>
          <li>Dell</li>
          <li>Others</li>

         </ul>
         <h3>Laptops Condition: </h3>
         <ul>
          <li>Ensure Laptops are in good working conditions, and not older <br></br>than 5 years.</li>
          <li>Laptops may have minor faults but still functional with no <br></br>major damage like cracked screen or missing keys. </li>
          <li>Every laptop should include a working charger.</li>
          <li>However, if you have a condemned laptop, you can equally <br></br>donate for recycling.</li>

         </ul>
         </div>
         <Link to='/donate'><button className='button'>Donate</button></Link>

      </div>
      <div>
        <img src={img} width={460} className='device-img' alt='device-img'/>
      </div>
      </div>
    </section>
  )
}

export default Device