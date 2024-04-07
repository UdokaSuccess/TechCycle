import React from 'react'
// import { useState} from 'react'
import { Link } from 'react-router-dom';
import img from './images/img12.png'

// import { auth , googleProvider} from "./firebase";
// import { signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";



function Login() {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //  const navigate = useNavigate()

  // const login = async () =>{
  //   try{
  //   await signInWithEmailAndPassword(auth, email, password);
  //   navigate('/')
  //   }
  //   catch(error){
  //       console.error(error);
  //     }
  // }
  
  return (
    <div className='sign-login'>
      <div className='signup-row'>
        <div className='signup-col'>
        <h2>Together we can Empower the tech community</h2>
          <img src={img} width={240}/>
        </div>
        <div className='signup-col2'>
        <form className='login-form'>
        <h2>Welcome Back</h2>
        <label>Enter Your Email: <input type='email' name='email' required/></label>
        {/* <label>Enter Your Email: <input type='email' name='email' value={email} required onChange={(e) => setEmail(e.target.value)}/></label> */}
        <label>Enter Your Password: <input type='password' name='password' required/ ></label>
        {/* <label>Enter Your Password: <input type='password' name='password' required minLength={7} value={password} onChange={(e) => setPassword(e.target.value)}/ ></label> */}
        <button className='button'>Login</button>
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