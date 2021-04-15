import React, { useState, useEffect } from 'react';

const Main = (props) => {


    const [pickedHue, setpickedHue] = useState(Math.floor(Math.random() * 360))

    const changeColor = () => {
    const randomNumber = Math.floor(Math.random() * 360)
    
    setpickedHue(randomNumber);
    }

    return ( 
        <main className='main'  onClick={() => changeColor()} style={{'filter': `hue-rotate(${pickedHue}deg)`}}>
            hello world
        </main>
     );
}
 
export default Main;