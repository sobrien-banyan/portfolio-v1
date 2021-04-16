import React, {useState} from 'react';

const Contact = () => {

const [formData, setFormData] = useState({Name: '', Email: '', Subject: '', Message: ''});


const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

const onChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
};

const onSubmit = (e) => {
 
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error.message));

      e.preventDefault();
};



    return ( 
        <div className='w3-padding-64' id="contact">
              <div className="w3-center" >
              <h2 className="w3-wide w3-center w3-margin-bottom">CONTACT</h2>
        <br/>
  </div>

  <form className="w3-container" onSubmit={(e) => onSubmit(e)} name="contact" netlify="true" netlify-honeypot="bot-field">
    <div className="w3-section">
      <label>Name</label>
      <input className="w3-input w3-border w3-hover-border-black" onChange={(e) => onChange(e)} style={{width:100 + '%'}} value={formData.Name} type="text" name="Name" placeholder='Please Enter Your Name' required/>
    </div>
    <div className="w3-section">
      <label>Email</label>
      <input className="w3-input w3-border w3-hover-border-black"  onChange={(e) => onChange(e)} style={{width:100 + '%'}} value={formData.Email} type="text" name="Email" placeholder='Please Enter Your Email' required/>
    </div>
    <div className="w3-section">
      <label>Subject</label>
      <input className="w3-input w3-border w3-hover-border-black"  onChange={(e) => onChange(e)}style={{width:100 + '%'}} value={formData.Suject} name="Subject" placeholder='Please Enter Your Subject' required/>
    </div>
    <div className="w3-section">
      <label>Message</label>
      <input className="w3-input w3-border w3-hover-border-black"  onChange={(e) => onChange(e)} style={{width:100 + '%'}} value={formData.Message} name="Message" placeholder='Please Enter Your Message' required/>
    </div>
    <button type="submit" className="w3-button w3-block bg-black">Send</button>
  </form>


        </div>
     );
}
 
export default Contact;