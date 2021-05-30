

import React, {useState} from "react";



function App() {
    const [menuActive, setMenuActive] = useState(false)

    return (
            <div className='burger'>
                <div className='burger-btn' onClick={() => setMenuActive(!menuActive)}>
                    <span/>
                </div>
                <div className={menuActive ? 'menu active' : 'menu'} onClick={() => setMenuActive(false)}>
                    <div className='menu__content'>
                        <p className='menu__text'>Consulting</p>
                        <p className='menu__text'>01</p>
                        <p className='menu__text'>Marketing</p>
                        <p className='menu__text'>02</p>
                        <p className='menu__text'>Development</p>
                        <p className='menu__text'>03</p>
                        <p className='menu__text'>Cryptocurrency</p>
                        <p className='menu__text'>04</p>
                        <p className='menu__text'>Legal services</p>
                        <p className='menu__text'>05</p>
                        <p className='menu__text'>Real estate</p>
                        <p className='menu__text'>06</p>
                    </div>
                </div>
            </div>
    );
}

export default App;
