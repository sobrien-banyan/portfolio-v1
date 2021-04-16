import React from 'react';

const Footer = () => {
    return ( 
      
<footer className="w3-container w3-padding-32 bg-black w3-center">

<a href="#home" className="w3-button bg-black w3-margin"><i className="fas fa-arrow-up w3-margin-right"></i>To the top</a>
<div className="w3-xlarge w3-section">
  <i className="fab fa-facebook-official w3-hover-opacity"></i>
  <i className="fab fa-instagram w3-hover-opacity"></i>
  <i className="fab fa-snapchat w3-hover-opacity"></i>
  <i className="fab fa-pinterest-p w3-hover-opacity"></i>
  <i className="fab fa-twitter w3-hover-opacity"></i>
  <i className="fab fa-linkedin w3-hover-opacity"></i>
</div>
<p>Special Thanks To: <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" rel="noreferrer" className="w3-hover-text-green">w3Schools</a></p>
</footer>
     );
}
 
export default Footer;