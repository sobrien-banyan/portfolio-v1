import React from 'react';

const Apps = () => {
    return ( 
        <div className="w3-container w3-content w3-center w3-padding-64"  id="apps">
        <h2 className="w3-wide">APPLICATIONS</h2>
        <div className="w3-row w3-padding-32">
      <div className="w3-third">
        <p>Persevere LMS</p>
        <img src="assets/img/persevereLMS1.jpg" className="w3-round w3-margin-bottom" alt="Perseveres LMS"  style={{'width':100 + '%'}}></img>
        <p>In this project we used MVC for the file structure and React for the Front-end framework. Context/API was used for state management. Express,Mongoose and Node.JS on the back-end. The databases used were MariaBD(SQL) and MongoDB. Being the project manager on this was a great opportunity. I contributed to both the Front-end and Back-end code. This was a huge project that took months to complete.</p>
      </div>
      <div className="w3-third">
        <p>Code</p>
        <img src="assets/img/computer.jpg" className="w3-round w3-margin-bottom" alt="computer"  style={{'width':60 + '%'}}></img>
      </div>
      <div className="w3-third">
        <p>Healthy Living</p>
        <img src="assets/img/healthyLiving.png" className="w3-round" alt="healthy licing website" style={{'width':100 + '%'}}></img>
        <p>Healthy Living is a site that uses HTML, CSS and jQuery/Ajax. </p>
      </div>
    </div>
    </div> 
    );
}
 
export default Apps;