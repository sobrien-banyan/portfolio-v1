import React, {useState} from "react";

const Navbar = () => {

    const [smallNav, setSmallNav] = useState('bg-black w3-hide w3-hide-large small-nav')


const navHandler = () => {
    if (smallNav === 'bg-black w3-hide w3-hide-large small-nav') {
        setSmallNav('bg-black w3-hide-large small-nav')
    } else {
        setSmallNav('bg-black w3-hide w3-hide-large small-nav')
    }
};

const navCloser = () => {
    setSmallNav('bg-black w3-hide w3-hide-large small-nav')
};


  return (
    <div>

        <div  className={smallNav}>

          <a href='#home'><button onClick={() => navCloser()} className="w3-padding-large w3-button margin-top-60">HOME</button></a>
          <a href='#about'><button onClick={() => navCloser()}  className="w3-padding-large w3-button">ABOUT</button></a>
          <a href='#apps'><button onClick={() => navCloser()}  className="w3-padding-large w3-button">APPS</button></a>
          <a href='#skills'><button onClick={() => navCloser()}  className="w3-padding-large w3-button">SKILLS</button></a>
          <a href='#tools'><button onClick={() => navCloser()}  className="w3-padding-large w3-button">TOOLS</button></a>
          {/* <a href='#contact'><button onClick={() => navCloser()}  className="w3-padding-large w3-button">CONTACT</button></a> */}
        </div>

           


            <div className="hamburger  w3-hide-large" onClick={() => navHandler()}>
            <i className="fas fa-bars fa-2x"></i>
            </div>

      <div className="w3-top">
        <div className="w3-bar bg-black w3-card w3-hide-small w3-hide-medium">
        
          <a href='#home'><button  className="w3-padding-large w3-button">HOME</button></a>
          <a href='#about'><button className="w3-padding-large w3-button">ABOUT</button></a>
          <a href='#apps'><button className="w3-padding-large w3-button">APPS</button></a>
          <a href='#skills'><button className="w3-padding-large w3-button">SKILLS</button></a>
          <a href='#tools'><button className="w3-padding-large w3-button">TOOLS</button></a>
          {/* <a href='#contact'><button className="w3-padding-large w3-button">CONTACT</button></a> */}
          
         
        </div>
      </div>

    </div>
  );
};

export default Navbar;
