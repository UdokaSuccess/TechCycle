import Popup from './Popup'




function DonateForm({handleLaptopName, handleLaptopSpecs, handlePics, devicename, devicespecs, submit}) { 
  return (
    <div className='donation' id='donate-form'>
          <div className='dim-pg'></div>
    <h2>Donation Form</h2>
    <small>Thank You for your interest in donating to tech cycle to help transform lives. Please complete the form below, our team will reach out to you with instructions on how to proceed with sending your donation</small>
    <form className="donation-form" onSubmit={submit}>
        <label>Full Name: <span className='required'>*</span></label> <input type='text' name='name'required/>
        <label>Email Address:<span className='required'>*</span></label> <input type='email' name='email' required pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"/>
        <label>Country <span className='required'>*</span></label> <input type='country' required/>
        <label>State <span className='required'>*</span></label> <input type='text' required/>
        <label>Address (or nearest landmark for pickup)<span className='required'>*</span></label> <input type='text' required/>
        <label>Telephone number <span className='required'>*</span></label> <input type='tel' name='phone' required/>
        <label>Laptop Name:<span className='required'>*</span></label> <input type='text' required onChange={ handleLaptopName} value={devicename}/>
        <label>Laptop Specification: <span className='required'>*</span></label> <textarea type='text' required className='textarea' onChange={ handleLaptopSpecs} value={devicespecs}></textarea>
       <label>Upload a Photo of Your Laptop<span className='required'>*</span></label>
       <input type='file' required size={80} accept=".png, .jpg, .jpeg" onChange={handlePics}/>
        <label>Is your device working properly?<span className='required'>*</span> (select "No" if device is condemned)
          <div>
        <input type='radio' name='select'/>yes <input type='radio' name='select'/>No                   
        </div>
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