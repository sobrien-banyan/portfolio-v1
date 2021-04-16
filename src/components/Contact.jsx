import React from 'react';

const Contact = () => {
    return ( 
        <div className='w3-padding-64'>
              <div className="w3-center" id="contact">
              <h2 className="w3-wide w3-center w3-margin-bottom">CONTACT</h2>
        <br/>
  </div>

  <form className="w3-container" action="POST" netlify='true'>
    <div className="w3-section">
      <label>Name</label>
      <input className="w3-input w3-border w3-hover-border-black" style={{width:100 + '%'}} type="text" name="Name" required/>
    </div>
    <div className="w3-section">
      <label>Email</label>
      <input className="w3-input w3-border w3-hover-border-black" style={{width:100 + '%'}}  type="text" name="Email" required/>
    </div>
    <div className="w3-section">
      <label>Subject</label>
      <input className="w3-input w3-border w3-hover-border-black" style={{width:100 + '%'}}  name="Subject" required/>
    </div>
    <div className="w3-section">
      <label>Message</label>
      <input className="w3-input w3-border w3-hover-border-black" style={{width:100 + '%'}}  name="Message" required/>
    </div>
    <button type="submit" className="w3-button w3-block bg-black">Send</button>
  </form>


        </div>
     );
}
 
export default Contact;