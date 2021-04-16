import React from 'react';

const About = () => {
    return ( 
        <div>
              <div className="w3-container w3-content w3-center w3-padding-64"  id="about">
    <h2 className="w3-wide">ABOUT</h2>
    <p className="w3-opacity"><i>lovein' code</i></p>
    <p className="w3-justify">So I'm a Junior Web Developer working for Banyan Labs and I can hardly beleive I'm getting paid to it. Its such a great work environment. I work remotely and I have a pretty good set up that allows me to get my work done. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus rem molestias nulla alias omnis inventore cupiditate aliquid ex beatae veritatis, eos nihil qui laudantium, earum recusandae possimus modi perspiciatis fugit!</p>
    <div className="w3-row w3-padding-32">
      <div className="w3-third">
        <p>Code</p>
        <img src="assets/img/code.jpg" className="w3-round w3-margin-bottom" alt="code"  style={{'width':60 + '%'}}></img>
      </div>
      <div className="w3-third">
        <p>Code</p>
        <img src="assets/img/computer.jpg" className="w3-round w3-margin-bottom" alt="computer"  style={{'width':60 + '%'}}></img>
      </div>
      <div className="w3-third">
        <p>Code</p>
        <img src="assets/img/code-1.jpg" className="w3-round" alt="code" style={{'width':60 + '%'}}></img>
      </div>
    </div>
  </div>


        </div>
     );
}
 
export default About;