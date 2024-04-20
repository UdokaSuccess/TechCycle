import img from './images/img11.png'
import {Link, useNavigate} from 'react-router-dom'
import { useState} from 'react'
import { auth, googleProvider} from "./firebase"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"


function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  // const navigate = useNavigate()

//----------------------------------------------- To handle signup authentication

  const signup = async () => {
       try{
    await createUserWithEmailAndPassword(auth, email, password);
 }
      catch(error){
    console.error(error);
    }
   }


  //  ----------------------------------------------To signup with third party account like google.com--------
  // const signUpWithGoogle = async () => {
  //     try {
  //       await signInWithPopup(auth, googleProvider);   
  //       navigate('/donate')     
  //     }
  //      catch (error) {
  //       console.error(error);
  //     } 
  //     }
    
  return (
 <section className='sign-login'>
    <div className='signup-row'>
  <div className='signup-col'>
    <h2>Together we can Empower the tech community</h2>
    <img src={img} width={240}/>
  </div>
  <div className='signup-col2'>
     <form className='login-form' onSubmit={signup}>
     <h2>Create Account</h2>
        <label className='label'>Full Name: <input type='text' name='name' required placeholder='Enter your full Name'/></label>
         <label className='label'>Email: <input type='email' name='email' required placeholder='Enter Your Email Address' onClick={(e) => setEmail(e.target.value)}/></label>
         <label className='label'>Password: <input type='password' name='password' required placeholder='Enter Your Password' minLength={6} onClick={(e) => setPassword(e.target.value)}/></label>
         <label className='label'>Confirm Password: <input type='password' name='password' required placeholder='Confirm Your Password' minLength={6}/></label>
         {/* <label className='label'><input type='checkbox' required/>I agree to tech cycle's terms and conditions.</label> */}
        <button className='button' type='submit'>Sign Up</button>
        <div>
          <hr></hr>
          <small>or Login with</small>
          <button >Google</button>
          <hr></hr>
        </div>
         <small>Already have a Tech Cycle account? <Link to='/login'>log in here</Link></small>
   </form>
  </div>
    </div>
    </section>
  )
}

export default Signup;