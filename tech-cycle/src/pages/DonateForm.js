import Popup from './Popup'




function DonateForm({handleLaptopName, handleLaptopSpecs, handlePics, devicename, devicespecs, submit, popUp}) {
 
  return (
    <div className='donation' id='donate-form'>
          <div className='dim-pg'></div>
    <h2>Donation Form</h2>
    <small>Thank You for your interest in donating to tech cycle to help transform lives. Please complete the form below, our team will reach out to you with instructions on how to proceed with sending your donation</small>
    <form className="donation-form" onSubmit={submit}>
        <label>Full Name:</label> <input type='text' required/>
        <label>Email Address:</label> <input type='email' required/>
        <label>Location:</label> <input type='text' required/>
        <label>Laptop Name:</label> <input type='text' required onChange={ handleLaptopName} value={devicename}/>
        <label>Laptop Specification:</label> <textarea type='text' required className='textarea' onChange={ handleLaptopSpecs} value={devicespecs}></textarea>
       <label>Upload a Photo of Your Laptop</label>
       <input type='file' required size={80} accept=".png, .jpg, .jpeg" onChange={handlePics}/>
        <label>Is your device working properly? 
        <input type='radio' name='select' />yes <input type='radio' name='select'/>No
        </label>
       <label><input type='checkbox'/>I want to recieve updates on how my donation is transforming individuals.</label>
       <small>By ticking the box below, you agree to tech cycle's <a href='/contact'>term's of service</a> and <a href='#'>privacy policy</a></small>
       <label><input type='checkbox' required/>I agree to tech cycle's terms and conditions.</label>
       <button className='button' type='submit'>Submit</button>        
    </form>
    <Popup/>
       </div>


  )
}

export default DonateForm