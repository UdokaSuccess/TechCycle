import img from './images/img11.png'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { useState} from 'react'
import { auth, googleProvider} from "./firebase"
import { createUserWithEmailAndPassword, signInWithPopup} from "firebase/auth"



function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  // const navigate = useNavigate()
  const location = useLocation()
  const removefrom = location.state?.removefrom?.pathname || '/'


//----------------------------------------------- To handle signup authentication
  const signup = async (e) => {
    e.preventDefault()
    try{
 await createUserWithEmailAndPassword(auth, email, password);
//  navigate(removefrom, {replace: true}) 
window.location.assign(removefrom);          

 setEmail('')
 setPassword('')
}
   catch(error){
 console.error(error);
 }
}

const signUpWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.error(error);
  }
}    
  return (
 <section className='sign-login'>
    <div className='signup-row'>
  <div className='signup-col'>
    <h2>Together we can Empower the tech community</h2>
    <img src={img} width={240}/>
  </div>
  <div className='signup-col2'>
     <form className='login-form'>
     <h2>Create Account</h2>
        <label className='label'>Full Name: <input type='text' name='name' required placeholder='Enter your full Name'/></label>
         <label className='label'>Email: <input type='email' name='email' required placeholder='Enter Your Email Address' onChange={(e) => setEmail(e.target.value)}/></label>
         <label className='label'>Password: <input type='password' name='password' required placeholder='Enter Your Password' minLength={6} onChange={(e) => setPassword(e.target.value)}/></label>
         <label className='label'>Confirm Password: <input type='password' name='password' required placeholder='Confirm Your Password' minLength={6}/></label>
        <button className='button' type='submit' onClick={signup}>Sign Up</button>
        </form>

          <hr></hr>
          <small>or Login with</small>
          <div>
          <button onClick={signUpWithGoogle}>Sign up with your google account</button>
          <hr></hr>
        </div>
         <small>Already have a Tech Cycle account? <Link to='/login'>log in here</Link></small>
  </div>
    </div>
    </section>
  )
}

export default Signup;