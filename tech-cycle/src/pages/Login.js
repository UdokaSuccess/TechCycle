import React, {useState, useEffect} from 'react'
import { Link, useNavigate, useLocation} from 'react-router-dom';
import { auth} from "./firebase"
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import img from './images/img12.png'


export const logOut = () => {
    signOut(auth)
    window.location.reload()  
}
function Login() {
  const [email, setEmail] = useState(""); 
   const [password, setPassword] = useState("");
  //  const navigate = useNavigate()
   const location = useLocation()
   const removefrom = location.state?.pathname || '/'
   let error = null

   const login = async (e) =>{
    e.preventDefault() 
    error = null        
       try {
         await signInWithEmailAndPassword(auth, email, password) 
          // navigate(removefrom, {replace: true})
          window.location.assign(removefrom);          
         setEmail('')
         setPassword('')
         }
      catch (err) {  
        error = err.message
        console.error(error)
      }
  }

   return (
    <div className='sign-login'>
      <div className='signup-row'>
        <div className='signup-col'>
        <h2>Together we can Empower the tech community</h2>
          <img src={img} width={240}/>
        </div>
        <div className='signup-col2'>
        <form className='login-form' onSubmit={login}>
        <h2>Welcome Back</h2>
        <label>Enter Your Email: <input type='email' name='email' required  onChange={(e) => setEmail(e.target.value)} /></label>
        <label>Enter Your Password: <input type='password' name='password' required  onChange={(e) => setPassword(e.target.value)} /></label>
        <button className='button' type='submit'>Login</button>
        </form>
        <div>
          <hr></hr>
          <small>or Login with</small>
          <hr></hr>
        </div>
        <small>Don't have an account? <Link to='/signup'>Signup here</Link></small>
        </div>

      </div>
    </div>
  )
}

export default Login