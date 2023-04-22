
import React from "react";
import "./styles.css";
import { v4 as uuidv4 } from "uuid";
import CardNews from "./CardNews"
import Carroussel from "./Carroussel";

export default function ApplicationCarroussel() {
  let cards = [
    {
      key: uuidv4(),
      content: <CardNews url='assets/img/ondemand-SH.png' discription='Ondemand by SimplyHired offers an assortment of web services. Built with React and styled-component.' title='Ondemand by SimplyHired' link='https://ondemand.simplyhired.com/' />
    },
    {
      key: uuidv4(),
      content: <CardNews url='assets/img/coolBlueScreenShot.png' discription='First built with HTML/CSS and jQuery then converted to React. Frontend only' title='Cool Blue' link='https://cool-blue.netlify.app/' />
    },
    {
      key: uuidv4(),
      content: <CardNews url='assets/img/healthyLiving.png' discription='This site features a light/dark theme as well as three other themes. Healthy Living is a site that was first built using HTML, CSS and jQuery then converted to React.' title='Healthy Living' link='https://healthy-living-jo.netlify.app/' />
    },
    {
      key: uuidv4(),
      content: <CardNews url='assets/img/persevereLMS1.jpg' discription='In this project we used MVC for the file structure and React for the Front-end framework. Context/API was used for state management. Express,Mongoose and Node.JS on the back-end. The databases used were MariaBD(SQL) and MongoDB. Being the project manager on this was a great opportunity. I contributed to both the Front-end and Back-end code. This was a huge project that took months to complete.' title='Persevere LMS' link='https://github.com/sobrien-banyan/persevere-lms' />
    },
    {
      key: uuidv4(),
      content: <CardNews url='assets/img/ondemand-SH.png' discription='Ondemand by SimplyHired offers an assortment of web services. Built with React and styled-component.' title='Ondemand by SimplyHired' link='https://ondemand.simplyhired.com/' />
    },
    {
      key: uuidv4(),
      content: <CardNews url='assets/img/coolBlueScreenShot.png' discription='First built with HTML/CSS and jQuery then converted to React. Frontend only' title='Cool Blue' link='https://cool-blue.netlify.app/' />
    },
    {
      key: uuidv4(),
      content: <CardNews url='assets/img/healthyLiving.png' discription='This site features a light/dark theme as well as three other themes. Healthy Living is a site that was first built using HTML, CSS and jQuery then converted to React.' title='Healthy Living' link='https://healthy-living-jo.netlify.app/' />
    },
    {
      key: uuidv4(),
      content: <CardNews url='assets/img/persevereLMS1.jpg' discription='In this project we used MVC for the file structure and React for the Front-end framework. Context/API was used for state management. Express,Mongoose and Node.JS on the back-end. The databases used were MariaBD(SQL) and MongoDB. Being the project manager on this was a great opportunity. I contributed to both the Front-end and Back-end code. This was a huge project that took months to complete.' title='Persevere LMS' link='https://github.com/sobrien-banyan/persevere-lms' />
    },
  ]; /*.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });*/

  return (
    <div className="App">
      {/*<div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={cards}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          showNavigation={showArrows}
          animationConfig={config.gentle}
        />
  </div>*/}
      <Carroussel
        cards={cards}
        height="500px"
        width="90%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}
