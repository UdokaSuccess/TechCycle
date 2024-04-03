import React from 'react'
// import { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
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
                <h2>Login</h2>
        <form className='login-form'>
        <label>Enter Your Email: <input type='email' name='email' required/></label>
        {/* <label>Enter Your Email: <input type='email' name='email' value={email} required onChange={(e) => setEmail(e.target.value)}/></label> */}
        <label>Enter Your Password: <input type='password' name='password' required/ ></label>
        {/* <label>Enter Your Password: <input type='password' name='password' required minLength={7} value={password} onChange={(e) => setPassword(e.target.value)}/ ></label> */}

        <button className='button'>Login</button>
        <small>No account? <Link to='/signup'>Signup here</Link></small>
        </form>
    </div>
  )
}

export default Login