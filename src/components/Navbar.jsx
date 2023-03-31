import React, { useState, useContext } from "react";
import { MainContext } from "./Context";
import SvgAnimation from "./svgAnimation/SvgAnimationSmallName";

const Navbar = () => {
  const store = useContext(MainContext);

  const [toggle, setToggle] = useState(true);

  const navHandler = () => {
    setToggle(!toggle);
  };

  const navCloser = () => {
    setToggle(true);
  };

  return (
    <div>
      <div className='small-nav-hide'>
      {!toggle && <div
        className='small-nav'
        style={store.themeBoolean ? store.darkTheme : store.lightTheme}
      >
        <a href="#home">
          <button
            onClick={() => navCloser()}
            className="w3-padding-large w3-button margin-top-60"
          >
            HOME
          </button>
        </a>
        <a href="#about">
          <button
            onClick={() => navCloser()}
            className="w3-padding-large w3-button"
          >
            ABOUT
          </button>
        </a>
        <a href="#apps">
          <button
            onClick={() => navCloser()}
            className="w3-padding-large w3-button"
          >
            APPS
          </button>
        </a>
        <a href="#skills">
          <button
            onClick={() => navCloser()}
            className="w3-padding-large w3-button"
          >
            SKILLS
          </button>
        </a>
        <a href="#tools">
          <button
            onClick={() => navCloser()}
            className="w3-padding-large w3-button"
          >
            TOOLS
          </button>
        </a>
        <a href="#snake-game">
          <button
            onClick={() => navCloser()}
            className="w3-padding-large w3-button"
          >
            GAME
          </button>
        </a>
        <a href="#contact-form">
          <button
            onClick={() => navCloser()}
            className="w3-padding-large w3-button"
          >
            CONTACT
          </button>
        </a>
        <button
          onClick={() => {
            store.setThemeBoolean(!store.themeBoolean);
            navCloser();
          }}
          className="w3-padding-large w3-button"
        >
          <i className="fas fa-adjust"></i>
        </button>
        {/* <a href='#contact'><button onClick={() => navCloser()}  className="w3-padding-large w3-button">CONTACT</button></a> */}
      </div>}
      </div>

      <div className="nav-button " onClick={() => navHandler()}>
        <i
          className={toggle ? "fas fa-arrow-circle-down fa-2x" : "fas fa-arrow-circle-down fa-2x nav-button-rotate"}
          style={
            store.themeBoolean ? { color: "#dcdcdc" } : { color: "#161616" }
          }
        ></i>
      </div>

      <div className="w3-top large-navbar">
        <div
          className="w3-card top-large-nav-bar"
          style={store.themeBoolean ? store.darkTheme : store.lightTheme}
        >
           <a href="#home">
           <SvgAnimation/>
          </a>
          <div>
         
          <a href="#about">
            <button className="w3-padding-large w3-button">ABOUT</button>
          </a>
          <a href="#apps">
            <button className="w3-padding-large w3-button">APPS</button>
          </a>
          <a href="#skills">
            <button className="w3-padding-large w3-button">SKILLS</button>
          </a>
          <a href="#tools">
            <button className="w3-padding-large w3-button">TOOLS</button>
          </a>
          <a href="#snake-game">
            <button className="w3-padding-large w3-button">GAME</button>
          </a>
          <a href="#contact-form">
            <button className="w3-padding-large w3-button">CONTACT</button>
          </a>
          <button
            onClick={() => store.setThemeBoolean(!store.themeBoolean)}
            className="w3-padding-large w3-button"
          >
            <i className="fas fa-adjust"></i>
          </button>
          {/* <a href='#contact'><button className="w3-padding-large w3-button">CONTACT</button></a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
