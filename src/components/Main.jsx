import React, { useState } from 'react';
import About from './About';
import Skills from './Skills';
import Tools from './Tools';
import Apps from './Apps';
import Contact from './Contact';
import Footer from './Footer';

const Main = (props) => {


    const [pickedHue, setpickedHue] = useState(Math.floor(Math.random() * 360))

    const changeColor = () => {
    const randomNumber = Math.floor(Math.random() * 360)
    
    setpickedHue(randomNumber);
    }

    return ( 
        <main className='main'  onClick={() => changeColor()} style={{'filter': `hue-rotate(${pickedHue}deg)`}}>
           <About/>
            <Skills />
            <Apps/>
            <Tools/>
            <Contact/>
            <Footer/>
        </main>
     );
}
 
export default Main;