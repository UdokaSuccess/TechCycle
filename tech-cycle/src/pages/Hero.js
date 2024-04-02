import React from 'react'
import heroimg from './images/heroimg2.png'

function Hero() {
  return (
    <>
    <div className='hero-sec'>
    <div className='row'>
      <div className='col1'>
      <h1>JOIN THE TECH CYCLE <br></br>COMMUNITY:</h1>
      <p>Donate your old  laptops, Recieve needed tech solutions</p>
         <button className='button'>Donate</button>
      </div>
      <div className='col2'>
        <img src={heroimg} width={420}/>
      </div>
      </div>
      </div>
    <div className='cta-text'>
        <h2>Empower Others by donating your gadgets for <span>Social Security</span></h2>
        <button className='button'>Donate</button>
      </div> 
  </>
  )
}

export default Hero