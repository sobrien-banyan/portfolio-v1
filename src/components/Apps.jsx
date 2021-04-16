import React from 'react';

const Apps = () => {
    return ( 
        <div className="w3-container w3-content w3-center w3-padding-64"  id="apps">
        <h2 className="w3-wide">APPLICATIONS</h2>
        <div className="w3-row w3-padding-32">
      <div className="w3-third">
        <p>Code</p>
        <img src="assets/img/code.jpg" className="w3-round w3-margin-bottom" alt="code"  style={{'width':60 + '%'}}></img>
      </div>
      <div className="w3-third">
        <p>Code</p>
        <img src="assets/img/computer.jpg" className="w3-round w3-margin-bottom" alt="computer"  style={{'width':60 + '%'}}></img>
      </div>
      <div className="w3-third">
        <p>Code</p>
        <img src="assets/img/code-1.jpg" className="w3-round" alt="code" style={{'width':60 + '%'}}></img>
      </div>
    </div>
    </div> 
    );
}
 
export default Apps;