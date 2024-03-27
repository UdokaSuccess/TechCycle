import React from 'react'
import banner from "../pages/images/img4.png"
import ReceiverForm from './ReceiverForm'
import ReceiverCta from './ReceiverCta'

function ReceiverHero() {
  return (
    <div className='ReceiverBanner'>
        <img src={banner} className='ReceiverImg' />
        <h2 className='ReceiverBannerText'>Request for a Laptop <br/><span className='ReceiverBannerSpan'>Submit an aplication for a laptop</span></h2>
         <ReceiverForm />
         <ReceiverCta />
    </div>
  )
} 

export default ReceiverHero