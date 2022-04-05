import React, { useContext } from 'react';
import { MainContext } from "../Context";
import Goo from '../goo/Goo';
import './toggleStyle.css';

const Toggle = () => {
    const store = useContext(MainContext);
    return (
        <span className='toggleWrapper' onClick={() => store.setThemeBoolean(!store.themeBoolean)}>
            <div className='toggleGooContainer' />
            <div className='toggleGoo' style={{ left: `${store.themeBoolean ? '3px' : '30px'}` }} >
                <Goo />
            </div>
        </span>
    );
}

export default Toggle;
