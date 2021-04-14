import React, {useState} from 'react';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';





const App = () => {

const [pickedHue, setpickedHue] = useState(Math.floor(Math.random() * 360))



const changeColor = () => {
const randomNumber = Math.floor(Math.random() * 360)

setpickedHue(randomNumber);
}


  return (
    <div onClick={() => changeColor()} className="App " style={{'filter': `hue-rotate(${pickedHue}deg)`}}>
  <h1>Sean OBrien's Portfolio</h1>
   <h2 className='App-logo'>Coming Soon</h2>
    </div>
  );
}
export default App;