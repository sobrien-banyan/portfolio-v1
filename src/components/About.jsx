import React, { useContext } from "react";
import { MainContext } from "./Context";
import Links from "./Links";
import GitHubContribution from "./GitHubContribution";
import Video from "./Video";
import tuckNRollMp4 from "../assets/videos/tuckNrollExit.mp4";
import pageAzMp4 from "../assets/videos/pageAz.mp4";
import Goo from './goo/Goo';

const About = () => {
  const store = useContext(MainContext);
  return (
    <div className='about-section'>
      <Links />
      <div className="w3-container w3-content w3-center w3-padding-64">
        <h2 className="w3-wide w3-center w3-margin-bottom">ABOUT</h2>
        <br/>
        <p className="w3-justify">
          Web Developer focused on learning the newest technologies,
          implementing excellent coding practices, and adding value to projects.
          Starting in the wonderful world of HTML and CSS prepared me for the
          trenches of JavaScript. Having a comprehensive understanding of React
          has allowed me to build some cool applications. JavaScript
          Coding challenges are a must for any coder and in doing so logic and
          reasoning are expanded. Now a little bit about this site. React is
          used with a context provider to pass the state around. Have fun by
          dragging my picture around or clicking on my name. I'm familiar with Java,
          Ajax and express on the back-end. However, it's important to be
          agnostic when it comes to coding languages. My understanding of coding
          fundamentals has allowed me to expand my coding
          horizons. May you enjoy this site and take an idea of my
          abilities with you.{" "}
        </p>
        <GitHubContribution />
        <div className="goo-container">
          <Goo />
        </div>
        <div className="videoRow w3-padding-32 w3-hide-small">
          <div className="w3-third" style={{ filter: `hue-rotate(${store.hueRotate}deg)` }}>
            <img
              src="assets/img/code-2.jpg"
              className="w3-round w3-margin-bottom codeImage"
              alt="code"
            ></img>
          </div>
          <div className="w3-third" style={{ filter: `hue-rotate(${store.hueRotate}deg)` }}>
            <img
              src="assets/img/code-1.jpg"
              className="w3-round codeImage"
              alt="code"
            ></img>
          </div>
        </div>
        <div className="videoRow">
          <div className="w3-third">
            <Video videoSourceMp4={pageAzMp4} isAutoPlay={true} />
          </div>
          <div className="w3-third">
            <Video videoSourceMp4={tuckNRollMp4} isAutoPlay={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
