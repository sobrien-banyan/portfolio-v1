import React from "react";

const GitHubContribution = () => {
  return (
    <div className="w3-row w3-padding-32">
      <p>1094 GitHub Contributions</p>
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
        ></img>
      </a>
    </div>
  );
};

export default GitHubContribution;
