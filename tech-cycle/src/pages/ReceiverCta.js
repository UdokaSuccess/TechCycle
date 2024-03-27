import React from 'react'

function ReceiverCta() {
  return (
    <div className='receiverCta'>
        <p>By clicking the box below, you agree to tech cycle's <a href='#' target='_blank'>terms of service</a><span> and </span><a href='#' target='_blank'>Privacy policy</a></p>
        <div className='receiveCta'>
    <input type='checkbox'></input>
    <p>I agree to tech cycle's terms and conditions</p>
    </div>
    <div className='Receivebtn'>
    <button >Submit</button>
    </div>
    </div>
  )
}

export default ReceiverCta