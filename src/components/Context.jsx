import React, { useState, createContext } from 'react';
export const MainContext = createContext();

export const MainContextProvider = (props) => {

    const [lightTheme, setLightTheme] = useState({background: '#dcdcdc', color: '#161616'});
    const [lightThemeTwo, setLightThemeTwo] = useState({background: '#d1d1d1', color: '#161616'});
    const [darkTheme, setDarkTheme] = useState({background: '#161616', color: '#dcdcdc'});
    const [darkThemeTwo, setDarkThemeTwo] = useState({background: '#302f36', color: '#dcdcdc'});
    const [themeBoolean, setThemeBoolean] = useState(true);


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
              setThemeBoolean
        }}
        >
            {props.children}
        </MainContext.Provider>
)

};