import React from 'react'
import img from './images/img5.png'

function Donate() {
  return (
    <div className='donors'>
        <div className='donate-row'>
            <div className='donor-col'>
                <h2>DONATE TO US</h2>
            <p>And become part of our wonderful community</p>
         <a href='#donate-form'><button className='button'>Donate</button></a>
            </div>
         <div className='donor'>
        <img src={img} width={460}/>
        </div>
        </div>
    </div>
  )
}

export default Donate