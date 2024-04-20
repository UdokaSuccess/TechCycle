import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import img from './images/img12.png'


let error = null
const login = async (email, password) =>{
  error = null
  try {
    const response = await signInWithEmailAndPassword(email, password)
    error = null
    return response;
  } catch (error) {   
    error = error.message
  }
}
const yourLogin = () =>{
  return {error, login}
}

function Login() {
  const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   return (
    <div className='sign-login'>
      <div className='signup-row'>
        <div className='signup-col'>
        <h2>Together we can Empower the tech community</h2>
          <img src={img} width={240}/>
        </div>
        <div className='signup-col2'>
        <form className='login-form' onSubmit={yourLogin}>
        <h2>Welcome Back</h2>
        <label>Enter Your Email: <input type='email' name='email' required/></label>
        <label>Enter Your Password: <input type='password' name='password' required/ ></label>
        <button className='button' type='submit'>Login</button>
        <div>
          <hr></hr>
          <small>or Login with</small>
          <hr></hr>
        </div>
        <small>Don't have an account? <Link to='/signup'>Signup here</Link></small>
        </form>
        </div>

      </div>
    </div>
  )
}

export default Login