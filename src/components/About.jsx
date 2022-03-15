import React from "react";
import Links from "./Links";
import GitHubContribution from "./GitHubContribution";
import Video from "./Video";
import tuckNRollMp4 from "../assets/videos/tuckNrollExit.mp4"
import tuckNRollOgv from "../assets/videos/tuckNrollExit.ogv"
// import pageAzMp4 from "../assets/videos/pageAz.mp4"
// import pageAzOgv from "../assets/videos/pageAz.ogv"

const About = () => {
  return (
    <div>
      <Links />
      <div className="w3-container w3-content w3-center w3-padding-64">
        <h2 className="w3-wide">ABOUT</h2>
        <p className="w3-opacity">
          <i>lovin' code</i>
        </p>
        <p className="w3-justify">
          JavaScript Developer focused on learning the newest technologies,
          implementing excellent coding practices and adding value to projects.
          Starting off in the wonderful world of HTML and CSS prepared me for the
          trenches of JavaScript. Having a comprehensive understanding of React
          has allowed me to build some cool applications. JavaScript
          Coding challenges are a must for any coder and in doing so logic and
          reasoning are expanded. Now a little bit about this site. React is
          used with a context provider to pass the state around. Giving the
          ability to change the sites theme for dark to light and back again.
          Click anywhere on the main and the hue will change. Have fun by
          dragging my picture around or clicking on my name. I’m familiar with Java,
          Ajax and express on the back-end. However it’s important to be
          agnostic when it comes to coding languages. My understanding of coding
          fundamentals has afforded me the opportunity to expand my coding
          horizons. May you enjoy this site and take with you an idea of my
          abilities.{" "}
        </p>
        <div className="w3-row w3-padding-32">
          <div className="w3-third">
            <p>Eat Code</p>
            <img
              src="assets/img/code-2.jpg"
              className="w3-round w3-margin-bottom"
              alt="code"
              style={{ width: 60 + "%" }}
            ></img>
          </div>
          <div className="w3-third">
            <p>Drink Code</p>
            <img
              src="assets/img/code.jpg"
              className="w3-round w3-margin-bottom"
              alt="code"
              style={{ width: 60 + "%" }}
            ></img>
          </div>
          <div className="w3-third">
            <p>Dream Code</p>
            <img
              src="assets/img/code-1.jpg"
              className="w3-round"
              alt="code"
              style={{ width: 60 + "%" }}
            ></img>
          </div>
        </div>
        <GitHubContribution />
        <div className="videoRow">
          <div className="w3-third">
            <Video videoSourceMp4={tuckNRollMp4} videoSourceOgv={tuckNRollOgv} />
          </div>
          {/* <div className="w3-third">
            <Video videoSourceMp4={pageAzMp4} videoSourceOgv={pageAzOgv} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
