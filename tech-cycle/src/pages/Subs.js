import React from 'react'

function Subs() {
  return (
    <div className='subscribe-sec'>
      <div className='subscribe'>
         <h4>Subscribe To Our Newsletter</h4>
          <p>Register to learn more about us directly in your inbox</p>
          <form>
          <input type='email' placeholder='Enter a valid email address' required/>
          <button type='submit'>Subscribe Now</button>
          </form>
          </div>
    </div>
  )
}

export default Subs