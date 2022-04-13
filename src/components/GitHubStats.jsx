import React from 'react';

const GitHubStats = () => {
    return (
        <div className="videoRow w3-padding-32">
            <div className='w3-third'>
                <a href="https://github.com/sobrien-banyan">
                    <img align="center" alt="github stats." src="https://github-readme-stats.vercel.app/api?username=sobrien-banyan&count_private=true&show_icons=true&hide=stars,issues,prs,contribs" />
                </a>
            </div>
            <div className='w3-third'>
                <a href="https://github.com/sobrien-banyan" className='w3-third'>
                    <img align="center" alt="github most used languages." src="https://github-readme-stats.vercel.app/api/top-langs/?username=sobrien-banyan&layout=compact" />
                </a>
            </div>
        </div>
    );
}

export default GitHubStats;