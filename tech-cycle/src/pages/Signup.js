import React from 'react'
import {Link} from 'react-router-dom'

function Signup() {
  return (
    <div>
 <section className='sign-login'>
             <h2>Sign Up with Tech Cycle</h2>
     <form className='login-form'>
         <label>Email: <input type='email' name='email' required /></label>
         <label>Password: <input type='password' name='password' required /></label>
         <button className='button' type='submit'>Sign Up</button>
         <small>Have an account already? <Link to='/login'>log in here</Link></small>
   </form>
         <button className='button'>Sign Up with your google account</button>
         <button>logOut</button>
     </section>
    </div>
  )
}

export default Signup;