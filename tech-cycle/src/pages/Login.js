import React, {useState} from 'react'
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { auth, googleProvider} from "./firebase"
import { signInWithEmailAndPassword, signOut, signInWithPopup } from 'firebase/auth';
import img from './images/img12.png'


export const logOut = () => {
    signOut(auth)
    window.location.reload()  
}
function Login({handleLogin}) {
  const [email, setEmail] = useState(""); 
   const [password, setPassword] = useState("");
   const navigate = useNavigate()
   const location = useLocation()
   const removefrom = location.state?.pathname || '/'
   let error = null

   const login = async (e) =>{
    e.preventDefault() 
    error = null     
       try {
         await signInWithEmailAndPassword(auth, email, password) 
          navigate(removefrom, {replace: true})   
          setEmail('')
          setPassword('')
         }
      catch (err) {
        error = err.message
        console.error(error)
        document.getElementById('error').innerHTML = "Invalid password/Email address"
      }
  }
  
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  }  
   return (
    <div className='sign-login'>
      <div className='signup-row'>
        <div className='signup-col'>
        <h2>Together we can Empower the tech community</h2>
          <img src={img} width={240} alt='login-img'/>
        </div>
        <div className='signup-col2'>
        <form className='login-form' onSubmit={login}>
        <h2>Welcome Back</h2>
        <label>Enter Your Email: <input type='email' name='email' pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required  onChange={(e) => setEmail(e.target.value)} /></label>
        <label>Enter Your Password: <input type='password' name='password' required  onChange={(e) => setPassword(e.target.value)} /></label>
        <button className='button' type='submit'>Login</button>
        <small id='error'></small>
        <small><Link to='/reset'>Forgotten Password</Link></small>
        </form>
          <hr></hr>
          <small>or</small>
          <div>
          <button className='google-button' onClick={signInWithGoogle}>Login with your google account</button>
          <hr></hr>
        </div>
        <small>Don't have an account? <Link to='/signup'>Signup here</Link></small>
        </div>
      </div>
    </div>
  )
}

export default Login