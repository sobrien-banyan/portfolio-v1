import React from 'react';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import './vender/font-awesome/css/all.css'
import Header from './components/Header';
import Main from './components/Main';
import Navbar from "./components/Navbar";

const App = () => {

  return (
    <div className="App" >
      <Navbar />
      <Header />
      <Main />
    </div>
  );
}
export default App;