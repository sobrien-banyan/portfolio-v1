import React, { useContext } from "react";
import { MainContext } from "./Context";
import Links from "./Links";
import GitHubContribution from "./GitHubContribution";
import Video from "./Video";
import tuckNRollMp4 from "../assets/videos/tuckNrollExit.mp4";
import mountLemmon from "../assets/videos/mountLemmon.mp4";
import Goo from './goo/Goo';

const About = () => {
  const store = useContext(MainContext);
  return (
    <div className='about-section'>
      <Links />
      <div className="w3-container w3-content w3-center w3-padding-64">
        <h2 className="w3-wide w3-center w3-margin-bottom z-index-10">ABOUT</h2>
        <br />
        <p className="w3-justify z-index-10">
        Dedicated Automation Programmer with extensive experience in building automation systems, full-stack development, and infrastructure as code. Skilled in leveraging the Niagara N4 framework and modern programming tools to design, implement, and optimize automated solutions for critical environments. Passionate about delivering efficient, reliable systems and inspiring others through mentorship and technical leadership. This site is built using the MERN (Mongo, Express, React, Node.js) stack. Hosted on Netlify. A context provider is used to pass the state around. Have fun by dragging the profile picture around, clicking on the name in the header or switching from light to dark theme.
        </p>
        <p className="w3-left-align z-index-10"><a href="https://github.com/sobrien-banyan/Deploy-MERN-stack-tutorial"
        title="Deploy MERN stack tutorial"
        target="_blank"
        className="w3-hover-text-green"
        rel="noopener noreferrer"
        >Learn how to deploy a MERN stack application using AWS and Netlify.</a></p>
        
        <GitHubContribution />
        <div className="goo-container">
          <Goo />
        </div>

        {/* <div className="videoRow w3-padding-32 w3-hide-small">
          <div className="w3-third" style={{ filter: `hue-rotate(${store.hueRotate}deg)` }}>
            <img
              src="https://github-readme-stats.vercel.app/api?username=sobrien-banyan&count_private=true&show_icons=true&hide=prs&theme=radical"
              className="w3-round w3-margin-bottom codeImage w3-card-4"
              alt="github stats"
              loading="lazy"
            ></img>
          </div>
          <div className="w3-third" style={{ filter: `hue-rotate(${store.hueRotate}deg)` }}>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=sobrien-banyan&theme=dark&langs_count=10&layout=compact"
              className="w3-round codeImage w3-card-4"
              alt="top languages"
              loading="lazy"
            ></img>
          </div>
        </div> */}

        <div className="videoRow w3-padding-32 w3-hide-small">
        <div className="w3-third" style={{ filter: `hue-rotate(${store.hueRotate}deg)` }}>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=sobrien-banyan&theme=dark&langs_count=10&layout=compact"
              className="w3-round codeImage w3-card-4"
              alt="top languages"
              loading="lazy"
            ></img>
          </div>
          {/* <div className="w3-third" style={{ filter: `hue-rotate(${store.hueRotate}deg)` }}>
            <img
              src="assets/img/code-2.jpg"
              className="w3-round w3-margin-bottom codeImage w3-card-4"
              alt="code"
              loading="lazy"
            ></img>
          </div> */}
          <div className="w3-third" style={{ filter: `hue-rotate(${store.hueRotate}deg)` }}>
            <img
              src="assets/img/code-1.jpg"
              className="w3-round codeImage w3-card-4"
              alt="code"
              loading="lazy"
            ></img>
          </div>
        </div>

        <div className="videoRow">
          <div className="w3-third">
            <Video videoSourceMp4={tuckNRollMp4} isAutoPlay={false} />
          </div>
          <div className="w3-third">
            <Video videoSourceMp4={mountLemmon} isAutoPlay={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
