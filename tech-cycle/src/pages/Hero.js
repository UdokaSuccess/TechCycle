import React from 'react'


function Hero() {
  return (
    <div className='hero-sec'>
      <div className='top-text'>
        <h2>Join The Tech Cycle <br></br> Community</h2>
        </div>
      {/* <img src={heroimg} alt='hero-img'/> */}
      <div className='bottom-text'>
        <p>Donate Unused laptops Recieve needed tech Soluions</p>
        </div>
      <div className='cta-text'>
        <h3>Empower Others by donating your gadgets for <span>Social Security</span></h3>
        <button className='button'>Donate</button>
      </div>
    </div>
  )
}

export default Hero