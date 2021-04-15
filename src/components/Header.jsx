import React, { useState } from 'react';
import Navbar from './Navbar'

const Header = (props) => {
    return ( 
        <header className='App-header'>
         <Navbar/>
             <h1>Sean OBrien's Portfolio</h1>
            <h2 className='App-logo'>Under Construction</h2>
            <div className='container-header-image-person'>
                <img src='/assets/img/me-clock.jpg' alt='profile' height='200' width='200'></img>
            </div>
        </header>
     );
}
 
export default Header;