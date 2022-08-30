import React from 'react';
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