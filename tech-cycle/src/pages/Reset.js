import Navbar from "../Navbar"
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase";
import { useState } from "react";




function Reset() {
    const [email, setEmail] = useState('')

  const sendResetEmail = async (e) => {
    e.preventDefault()
    try {
    await sendPasswordResetEmail(auth, email)
    document.getElementById('error2').innerHTML = "Check Your Email for Password Reset Link, Link expires in five minutes"
    setEmail('')
    window.location.reload()
    }
     catch (error) {
        console.log(error)
        document.getElementById('error2').innerHTML = "An Error occurred"
    }
  }
  return (
    <div>
        <Navbar/>
        <form className="reset-form" onSubmit={sendResetEmail}>
        <small id='error2'></small>
        <h1>Reset Password</h1>
         Email: <input type="email" name="email" placeholder="valid email address" required onChange={(e) => setEmail(e.target.value)} />
      

         {/* Old Password: <input type="email" name="email" placeholder="valid email address" required/>
         Email: <input type="email" name="email" placeholder="valid email address" required/>
         Email: <input type="email" name="email" placeholder="valid email address" required/> */}

        <button type='submit' className="button">Reset Password</button>
        </form>
    </div>
  )
}

export default Reset