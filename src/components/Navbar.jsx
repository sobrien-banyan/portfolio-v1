import React, { useState, useEffect } from "react";

const Navbar = () => {
  return (
    <div>
      <div className="w3-top">
        <div className="w3-bar w3-black w3-card">
          <a
            className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right"
            href="#"
            onClick="myFunction()"
            title="Toggle Navigation Menu"
          >
            <i className="fa fa-bars"></i>
          </a>
          <button className="w3-padding-large w3-button">HOME</button>
          <button className="w3-padding-large w3-button">ABOUT</button>
          <button className="w3-padding-large w3-button">APPS</button>
          <button className="w3-padding-large w3-button"
          >
            CONTACT
          </button>
          <div className="w3-dropdown-hover w3-hide-small">
            <button className="w3-padding-large w3-button" title="More">
              MORE <i className="fa fa-caret-down"></i>
            </button>
            <div className="w3-dropdown-content w3-bar-block w3-card-4">
              <a href="#" className="w3-bar-item w3-button">
                Merchandise
              </a>
              <a href="#" className="w3-bar-item w3-button">
                Extras
              </a>
              <a href="#" className="w3-bar-item w3-button">
                Media
              </a>
            </div>
          </div>
          <a
            href="#"
            className="w3-padding-large w3-hover-red w3-hide-small w3-right"
          >
            <i className="fa fa-search"></i>
          </a>
        </div>
      </div>

      <div
        id="navDemo"
        className="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top"
        // style={{'margin-top':46 + 'px'}}
      >
        <a
          href="#band"
          className="w3-bar-item w3-button w3-padding-large"
          onClick="myFunction()"
        >
          ABOUT
        </a>
        <a
          href="#tour"
          className="w3-bar-item w3-button w3-padding-large"
          onClick="myFunction()"
        >
          APPLICATIONS
        </a>
        <a
          href="#contact"
          className="w3-bar-item w3-button w3-padding-large"
          onClick="myFunction()"
        >
          CONTACT
        </a>
        <a
          href="#"
          className="w3-bar-item w3-button w3-padding-large"
          onClick="myFunction()"
        >
          MERCH
        </a>
      </div>
    </div>
  );
};

export default Navbar;
