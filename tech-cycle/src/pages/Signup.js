import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useState, useEffect} from 'react'
// import { auth , googleProvider} from "./firebase";
// import { createUserWithEmailAndPassword,signInWithPopup, signOut } from "firebase/auth";


function SignUp() {
//     const [email, setEmail] = useState("");
//    const [password, setPassword] = useState("");  
//    const navigate = useNavigate()

//    async function signup(){
//   const signup = async () => {
//        try{
//     await createUserWithEmailAndPassword(auth, email, password);
//  }
//       catch(error){
//     console.error(error);
//     }
//    }
  
//   const signUpWithGoogle = async () => {
//     await signInWithPopup(auth, googleProvider);
//    }
  // signUpWithGoogle().then((user) =>{  
  //   console.log(user)
  //   navigate('/donate')
  // })
  // signUpWithGoogle().catch((error) =>{  
  //   console.error(error)
  // })

  
  // const logOut = async () => {
  //   try {
  //   await signOut(auth);
  //   } catch (err){
  //     console.error(err);
  //   }
  // };

  return (
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
  )
}

export default SignUp