import React, {useState} from 'react';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';





const App = () => {

  return (
    <div  className="App ">
      <Header />
      <Main/>
    </div>
  );
}
export default App;