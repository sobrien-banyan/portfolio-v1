import React, { useContext } from "react";
import { MainContext } from "./Context";

const GitHubContribution = () => {
  const store = useContext(MainContext);
  return (
    <div className="w3-row w3-padding-32 gitHub-Contributions" style={{ filter: `hue-rotate(${store.hueRotate}deg)` }}>
      <p>2631 Total GitHub Contributions</p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/sobrien-banyan"
      >
        <img
          src="assets/img/github-contributions.png"
          className="w3-round w3-margin-bottom"
          alt="GitHub Contirbution"
          style={{ width: 100 + "%" }}
          loading="lazy"
        ></img>
      </a>
    </div>
  );
};

export default GitHubContribution;
