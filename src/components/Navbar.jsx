import React, {useState, useContext} from "react";
import {MainContext} from './Context';

const Navbar = () => {
  const store = useContext(MainContext);


    const [smallNav, setSmallNav] = useState('w3-hide w3-hide-large small-nav');
   


const navHandler = () => {
    if (smallNav === 'w3-hide w3-hide-large small-nav') {
        setSmallNav('w3-hide-large small-nav')
    } else {
        setSmallNav('w3-hide w3-hide-large small-nav')
    }
};

const navCloser = () => {
    setSmallNav('w3-hide w3-hide-large small-nav')
};



  return (
    <div>

        <div  className={smallNav} style={store.themeBoolean ? store.darkTheme : store.lightTheme}>

          <a href='#home'><button onClick={() => navCloser()} className="w3-padding-large w3-button margin-top-60">HOME</button></a>
          <a href='#about'><button onClick={() => navCloser()}  className="w3-padding-large w3-button">ABOUT</button></a>
          <a href='#apps'><button onClick={() => navCloser()}  className="w3-padding-large w3-button">APPS</button></a>
          <a href='#skills'><button onClick={() => navCloser()}  className="w3-padding-large w3-button">SKILLS</button></a>
          <a href='#tools'><button onClick={() => navCloser()}  className="w3-padding-large w3-button">TOOLS</button></a>
          <button onClick={() => {
            store.setThemeBoolean(!store.themeBoolean);
            navCloser()
            }} className="w3-padding-large w3-button"><i className='fas fa-adjust'></i></button>
          {/* <a href='#contact'><button onClick={() => navCloser()}  className="w3-padding-large w3-button">CONTACT</button></a> */}
        </div>

           


            <div className="hamburger  w3-hide-large" onClick={() => navHandler()}>
            <i className="fas fa-bars fa-2x" style={store.themeBoolean ? {color: '#dcdcdc'}: {color: '#161616'}}></i>
            </div>

      <div className="w3-top">
        <div className="w3-bar w3-card w3-hide-small w3-hide-medium" style={store.themeBoolean ? store.darkTheme : store.lightTheme}>
        
          <a href='#home'><button  className="w3-padding-large w3-button">HOME</button></a>
          <a href='#about'><button className="w3-padding-large w3-button">ABOUT</button></a>
          <a href='#apps'><button className="w3-padding-large w3-button">APPS</button></a>
          <a href='#skills'><button className="w3-padding-large w3-button">SKILLS</button></a>
          <a href='#tools'><button className="w3-padding-large w3-button">TOOLS</button></a>
          <button onClick={() => store.setThemeBoolean(!store.themeBoolean)} className="w3-padding-large w3-button"><i className='fas fa-adjust'></i></button>
          {/* <a href='#contact'><button className="w3-padding-large w3-button">CONTACT</button></a> */}
          
         
        </div>
      </div>

    </div>
  );
};

export default Navbar;
