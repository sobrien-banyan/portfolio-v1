import React, { useContext } from "react";
import { MainContext } from "./Context";

const Applications = () => {
  const store = useContext(MainContext);

  return (
    <div className="w3-container w3-content w3-center w3-padding-64" id="apps">
      <h2 className="w3-wide">APPLICATIONS</h2>
      <div className="w3-row w3-padding-32">
        <div
          className="w3-third"
          style={{ filter: `hue-rotate(-${store.hueRotate}deg)` }}
        >
          <h5>Cool Blue</h5>
          <a href="https://thirsty-kilby-a72701.netlify.app/">
            {" "}
            <img
              src="assets/img/coolBlueScreenShot.png"
              className="w3-round w3-margin-bottom"
              alt="cool blue"
              style={{ width: 90 + "%" }}
            ></img>
          </a>
          <p>First built with HTML/CSS and jQuery then converted to React.</p>
        </div>
        <div
          className="w3-third"
          style={{ filter: `hue-rotate(-${store.hueRotate}deg)` }}
        >
          <h5>Persevere LMS</h5>
          <img
            src="assets/img/persevereLMS1.jpg"
            className="w3-round w3-margin-bottom"
            alt="Perseveres LMS"
            style={{ width: 90 + "%" }}
          ></img>
          <p>
            In this project we used MVC for the file structure and React for the
            Front-end framework. Context/API was used for state management.
            Express,Mongoose and Node.JS on the back-end. The databases used
            were MariaBD(SQL) and MongoDB. Being the project manager on this was
            a great opportunity. I contributed to both the Front-end and
            Back-end code. This was a huge project that took months to complete.
          </p>
        </div>
        <div
          className="w3-third"
          style={{ filter: `hue-rotate(-${store.hueRotate}deg)` }}
        >
          <h5>Healthy Living</h5>
          <a href="https://nostalgic-bhaskara-d714a4.netlify.app/">
            {" "}
            <img
              src="assets/img/healthyLiving.png"
              className="w3-round"
              alt="healthy living website"
              style={{ width: 90 + "%" }}
            ></img>
          </a>
          <p>
            This site features a light/dark theme as well as three other themes.
            Healthy Living is a site that was first built using HTML, CSS and jQuery then converted to React.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Applications;
