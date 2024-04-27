import React from 'react'
import ReceiverForm from './ReceiverForm'

function ReceiverHero() {
  return (
    <div className='ReceiverBanner'>
      <div className='Receiver-hero-sec'>
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