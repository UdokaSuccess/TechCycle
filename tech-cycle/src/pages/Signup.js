import img from './images/img11.png'
import {Link} from 'react-router-dom'

function Signup() {
    // const handleSubmit = () => {
    // alert('done')
    // }

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
         <label className='label'>Email: <input type='email' name='email' required placeholder='Enter Your Email Address' /></label>
         <label className='label'>Password: <input type='password' name='password' required placeholder='Enter Your Password' minLength={6}/></label>
         <label className='label'>Confirm Password: <input type='password' name='password' required placeholder='Confirm Your Password' minLength={6}/></label>
         {/* <label className='label'><input type='checkbox' required/>I agree to tech cycle's terms and conditions.</label> */}
        <button className='button' type='submit'>Sign Up</button>
         <small>Already have a Tech Cycle account? <Link to='/login'>log in here</Link></small>
   </form>
  </div>
    </div>
    </section>
  )
}

export default Signup;