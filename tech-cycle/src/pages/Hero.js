import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect} from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';




function Hero() {

  const [isLoggedIn, setisLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setisLoggedIn(!!user);
    });
  }, []);

  return (
    <>
    <div className='hero-sec'>
    <div className='row'>
      <div className='col1'>
      <h1>JOIN THE TECH CYCLE <br></br>COMMUNITY:</h1>
      <p>Donate Laptops, Inspire Innovation<br></br>Receive Laptops, Navigate Possibility</p>
      { isLoggedIn  ?
       (<Link to='/donate'><button className='button'>Donate</button></Link>)
       :
        (<>
        <Link to='/donate'><button className='button'>Join Us</button></Link>
        </>)}
          
      </div>
      </div>
      </div>
    <div className='cta-text'>
        <h2>Empower Others by donating your gadgets <br></br> for <span id='text'></span></h2>
        {/* <Link to='/donate'><button className='button'>Donate</button></Link> */}
      </div> 
  </>
  )
}

export default Hero