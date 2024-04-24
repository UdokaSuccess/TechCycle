import img from './images/img11.png'
import {Link, useLocation} from 'react-router-dom'
import { useState} from 'react'
import { auth, googleProvider} from "./firebase"
import { createUserWithEmailAndPassword, signInWithPopup} from "firebase/auth"



function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [confirmpassword, setconfirmPassword] = useState(""); 

  // const navigate = useNavigate()
  const location = useLocation()
  const removefrom = location.state?.removefrom?.pathname || '/'


//----------------------------------------------- To handle signup authentication-------------------------
  const signup = async (e) => {
    e.preventDefault()
    if (password == confirmpassword) {
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
else{
  document.getElementById('error3').innerHTML = "Passwords must match"

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
    <img src={img} width={240} alt='sign-up-img'/>
  </div>
  <div className='signup-col2'>
     <form className='login-form' onSubmit={signup}>
     <h2>Create Account</h2>
        <label className='label'>Full Name: <input type='text' name='name' required placeholder='Enter your full Name'/></label>
         <label className='label'>Email: <input type='email' name='email' required placeholder='Enter Your Email Address' onChange={(e) => setEmail(e.target.value)} pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"/></label>
         <label className='label'>Password: <input type='password' name='password' required placeholder='Enter Your Password' minLength={8} onChange={(e) => setPassword(e.target.value)} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" /></label>
         <label className='label'>Confirm Password: <input type='password' name='confirm password' required placeholder='Confirm Password' minLength={6}  onChange={(e) => setconfirmPassword(e.target.value)}/></label>
        <small id='error3'></small>

        <button className='button' type='submit'>Sign Up</button>
        </form>

          <hr></hr>
          <small>or Login with</small>
          <div>
          <button onClick={signUpWithGoogle} className='google-button'>Sign up with your google account</button>
          <hr></hr>
        </div>
         <small>Already have a Tech Cycle account? <Link to='/login'>log in here</Link></small>
  </div>
    </div>
    </section>
  )
}

export default Signup;