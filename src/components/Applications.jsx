import React, { useState, useEffect } from "react";

const Applications = () => {

  const [index, setIndex] = useState(0);
  const [isCycle, setIsCycle] = useState(true);
  const [time, setTime] = useState(0);

  const slides = [
    {
      'url': "assets/img/ondemand-SH.png",
      'caption': 'Ondemand by SimplyHired offers an assortment of web services. Built with React and styled-component.',
      'title': 'Ondemand by SimplyHired',
      'link': "https://ondemand.simplyhired.com/"
    },
    {
      'url': "assets/img/coolBlueScreenShot.png",
      'caption': 'First built with HTML/CSS and jQuery then converted to React. Frontend only',
      'title': 'Cool Blue',
      'link': "https://cool-blue.netlify.app/"
    },
    {
      'url': "assets/img/healthyLiving.png",
      'caption': 'This site features a light/dark theme as well as three other themes. Healthy Living is a site that was first built using HTML, CSS and jQuery then converted to React.',
      'title': 'Healthy Living',
      'link': "https://healthy-living-jo.netlify.app/"
    },
    {
      'url': "assets/img/persevereLMS1.jpg",
      'caption': 'In this project we used MVC for the file structure and React for the Front-end framework. Context/API was used for state management. Express,Mongoose and Node.JS on the back-end. The databases used were MariaBD(SQL) and MongoDB. Being the project manager on this was a great opportunity. I contributed to both the Front-end and Back-end code. This was a huge project that took months to complete.',
      'title': 'Persevere LMS',
      'link': "https://github.com/sobrien-banyan/persevere-lms"
    },
  ];

  useEffect(() => {
    if (window.innerWidth < 600) {
      setIsCycle(false);
    }
  },[window.innerWidth]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTime(time + 1);
    }, 1000);
    return () => clearTimeout(timeout);
  });

  useEffect(() => {
    if (isCycle) {
      time % 3 === 0 && setIndex(index < 3 ? index + 1 : 0)
    };
  }, [time]);


  return (
    <div className="w3-container w3-content w3-center w3-padding-64" id="apps">
      <h2 className="w3-wide">APPLICATIONS</h2>

      <div className="container">
        <div className="slide-bottom-row w3-card-4">
          {slides.length > 0 && slides.map((obj, arrayIndex) => (
            <div key={obj.url} className="column">
              <img className={index === arrayIndex ? "demo-active cursor" : "demo cursor"} src={obj.url} style={{ width: '100%' }} onClick={() => {
                setIsCycle(false);
                setIndex(arrayIndex);
              }} alt={obj.caption} loading="lazy"></img>
            </div>
          ))}
        </div>
        <br />
        <a href={slides[index].link} target='_blank' rel="noopener noreferrer"> <h3>{slides[index].title}</h3></a>
        <br />
        {slides.length && slides.map((obj, arrayIndex) => index === arrayIndex ? (
          <a key={obj.url} href={obj.link} target='_blank' rel="noopener noreferrer">
            <div className="mySlide fade-in-image w3-card-4">
              <div className="numbertext">{index + 1} / {slides.length}</div>
              <img src={obj.url} alt={obj.caption} loading="lazy" />
            </div>
          </a>
        ) : null)}


        <div className="prev fade-in-image" onClick={() => {
          setIsCycle(false);
          setIndex(index === 0 ? (slides.length - 1) : index - 1)
        }}>&#10094;</div>
        <div className="next fade-in-image" onClick={() => {
          setIsCycle(false);
          setIndex(index === (slides.length - 1) ? 0 : index + 1);
        }}>&#10095;</div>


      </div>
      <div className="caption-container fade-in-image">
        <h4 id="caption" className='fade-in-image'>{slides[index].caption}</h4>
      </div>
    </div>
  );
};

export default Applications;
