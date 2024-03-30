import React from 'react'
import img from './images/img10.png'

function Device() {
  return (
    <section className='dev-section'>
    <div className='row'>
      <div>
        <h2>Device Donation Guidelines</h2>
        <h4>Accepted Devices: Laptops</h4>
         <ul>
          <li>Apple</li>
          <li>HP</li>
          <li>Samsung</li>
          <li>lenovo</li>
          <li>Dell</li>
         </ul>
         <h4>Laptops Condition: </h4>
         <p>Ensure Laptops are in good working conditions</p>
         <button className='button'>Donate</button>
      </div>
      <div>
        <img src={img} width={460}/>
      </div>
      </div>
    </section>
  )
}

export default Device