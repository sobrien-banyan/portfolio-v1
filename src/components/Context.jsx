import React, { useState, createContext, useMemo } from "react";
export const MainContext = createContext();

export const MainContextProvider = (props) => {
  const [lightTheme, setLightTheme] = useState({
    background: "#dcdcdc",
    color: "#161616",
  });
  const [lightThemeTwo, setLightThemeTwo] = useState({
    background: "#d1d1d1",
    color: "#161616",
  });
  const [darkTheme, setDarkTheme] = useState({
    background: "#161616",
    color: "#dcdcdc",
  });
  const [darkThemeTwo, setDarkThemeTwo] = useState({
    background: "#302f36",
    color: "#dcdcdc",
  });
  const [themeBoolean, setThemeBoolean] = useState(true);
  const [hueRotate, setHueRotate] = useState("");
  const [randomNumber0or1] = useState(useMemo(() => Math.floor(Math.random() * 2), []));

  return (
    <MainContext.Provider
      value={{
        lightTheme,
        setLightTheme,
        lightThemeTwo,
        setLightThemeTwo,
        darkTheme,
        setDarkTheme,
        darkThemeTwo,
        setDarkThemeTwo,
        themeBoolean,
        setThemeBoolean,
        hueRotate,
        setHueRotate,
        randomNumber0or1
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};
