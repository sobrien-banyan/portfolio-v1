import React, { useState, useContext, useEffect } from 'react';
import {MainContext} from './Context';
import About from './About';
import Skills from './Skills';
import Tools from './Tools';
import Apps from './Apps';
import Footer from './Footer';

const Main = (props) => {
    const store = useContext(MainContext);


    const [pickedHue, setpickedHue] = useState(Math.floor(Math.random() * 360))

    useEffect(()=> {
        store.setHueRotate(pickedHue)
    },[ store, pickedHue ])

    const changeColor = () => {
    const randomNumber = Math.floor(Math.random() * 360)
    
    setpickedHue(randomNumber);
    store.setHueRotate(randomNumber)
    }

    return ( 
        <main className='main'  onClick={() => changeColor()} style={store.themeBoolean ? {...store.darkThemeTwo, filter: `hue-rotate(${pickedHue}deg)`}: {...store.lightThemeTwo, filter: `hue-rotate(${pickedHue}deg)`}}>
           <About/>
            <Skills />
            <Apps/>
            <Tools/>
            <Footer/>
        </main>
     );
}
 
export default Main;