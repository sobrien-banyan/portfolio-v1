import React, {useState, useContext} from 'react';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import './vender/font-awesome/css/all.css'
import Header from './components/Header';
import Main from './components/Main';
import {MainContext} from './components/Context';







const App = () => {
const store = useContext(MainContext);

  return (
    <div  className="App " >
      <Header />
  
      <Main/>
    </div>
  );
}
export default App;