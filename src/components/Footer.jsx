import React from "react";

const Footer = () => {
  return (
    <footer className="w3-container w3-padding-32 w3-center">
      <a href="#home" className="w3-button w3-margin">
        <i className="fas fa-arrow-up w3-margin-right"></i>To the top
      </a>

      <p>Sean OBrien {new Date().getFullYear()}</p>
      <p>
        Special Thanks To:{" "}
        <a
          href="https://www.w3schools.com/w3css/default.asp"
          title="W3.CSS"
          target="_blank"
          rel="noreferrer"
          className="w3-hover-text-green"
        >
          w3Schools
        </a>{" "}
        and <a href="https://codesandbox.io/">codesandbox.io</a>{" "}
      </p>
    </footer>
  );
};

export default Footer;
