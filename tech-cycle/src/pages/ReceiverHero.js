import React from 'react'
// import banner from "../pages/images/img4.png"
import ReceiverForm from './ReceiverForm'

function ReceiverHero() {
  return (
    <div className='ReceiverBanner'>
      <div className='Receiver-hero-sec'>
        {/* <img src={banner} className='ReceiverImg'/> */}
        <h2 className='ReceiverBannerText'>Request for a Laptop <br/><span className='ReceiverBannerSpan'>Submit an application for a laptop</span></h2>
      </div>
         <ReceiverForm />
    </div>
  )
} 

export default ReceiverHero