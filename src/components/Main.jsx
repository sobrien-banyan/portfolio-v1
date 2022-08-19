import React, { useContext } from "react";
import { MainContext } from "./Context";
import About from "./About";
import Skills from "./Skills";
import Tools from "./Tools";
import Applications from "./Applications";
import Footer from "./Footer";

const Main = (props) => {
  const store = useContext(MainContext);

  const changeColor = () => {
    const randomNumber = Math.floor(Math.random() * 160);
    store.setHueRotate(randomNumber);
  };

  return (
    <main
      className="main"
      onClick={() => changeColor()}
      style={
        store.themeBoolean
          ? { ...store.darkThemeTwo }
          : { ...store.lightThemeTwo }
      }
    >
      <About />
      <Skills />
      <Applications />
      <Tools />
      <Footer />
    </main>
  );
};

export default Main;
