import React from 'react'
import heroimg from './images/heroimg2.png'

function Hero() {
  return (
    <>
    <div className='hero-sec'>
      {/* <div className='top-text'>
        <h2>Join The Tech Cycle <br></br> Community</h2>
        </div>
      {/* <img src={heroimg} alt='hero-img'/> */}
      {/* <div className='bottom-text'>
        <p>Donate Unused laptops Recieve needed tech Soluions</p>
        </div> */}
<div className='row'>
      <div className='col1'>
      <h1>JOIN THE TECH CYCLE COMMUNITY</h1>
      <p>Donate your old  laptops, Recieve needed tech solutions</p>
         <button className='button'>Donate</button>
      </div>
      <div className='col2'>
        <img src={heroimg} width={420}/>
      </div>
      </div>
      </div>
    <div className='cta-text'>
        <h3>Empower Others by donating your gadgets for <span>Social Security</span></h3>
        <button className='button'>Donate</button>
      </div> 
  </>
  )
}

export default Hero