import React from 'react'
// import banner from "../pages/images/img4.png"
import ReceiverForm from './ReceiverForm'

function ReceiverHero() {
  return (
    <div className='ReceiverBanner'>
      <div className='Receiver-hero-sec'>
        {/* <img src={banner} className='ReceiverImg'/> */}
        <div className='ReceiverBannerText'>
        <h2>Request for a Laptop </h2>
        <p> Submit an application for a laptop</p>
        </div>
      </div>
         <ReceiverForm />
    </div>
  )
} 

export default ReceiverHero