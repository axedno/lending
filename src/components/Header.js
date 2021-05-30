import React from 'react';
import logo from '../images/one_s.png'
import arrow from '../images/down-arrow.png'
import play_button from '../images/play-button.png'
import cube from '../images/cube.png'
import real_est from '../images/real_est.png'
import BurgerNav from "./BurgerNav/BurgerNav";



const Header = () => {
    return (
        <div className='header'>
            <nav className='header__nav'>
                <div>
                    <p className='header__navText'>Consulting</p>
                    <div className='header__delimetr'></div>
                    <p className='header__counter'>01</p>
                </div>
                <div>
                    <p className='header__navText'>Marketing</p>
                    <div className='header__delimetr'></div>
                    <p className='header__counter'>02</p>
                </div>
                <div>
                    <p className='header__navText'>Development</p>
                    <div className='header__delimetr'></div>
                    <p className='header__counter'>03</p>
                </div>
                <div>
                    <p className='header__navText'>Cryptocurrency</p>
                    <div className='header__delimetr'></div>
                    <p className='header__counter'>04</p>
                </div>
                <div>
                    <p className='header__navText'>Legal services</p>
                    <div className='header__delimetr'></div>
                    <p className='header__counter'>05</p>
                </div>
                <div>
                    <p className='header__navText'>Real estate</p>
                    <div className='header__delimetrColor'></div>
                    <p className='header__counterColor'>06</p>
                </div>
            </nav>
            <BurgerNav/>
                <div className='header__blocks'>
                    <div className='header__blockOne'>
                        <img className='header__logo' src={logo} alt="logo"/>
                        <h2 className='header__title'>06 <span className='header__R'>R</span>eal estate</h2>
                        <img className='header__arrow' src={arrow} alt="arrow"/>
                        <p className='header__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et </p>
                    </div>
                    <div className='header__blockTwo'>
                        <div className='header__cubeBtn'>
                            <img className='header__cube' src={cube} alt="cube"/>
                            <button className='header__startBtn'><span className='header__startText'>start today</span> </button>
                        </div>

                    </div>
                </div>
            <div className='header__blockBottom'>
                <div className='header__play'>
                    <p className='header__textPlay'><span className='header__watch'>Watch</span><br/> our trailer</p>
                    <div className='header__cirkul'>
                        <img className='header__playBtn' src={play_button} alt="play_button"/>
                    </div>
                </div>
                <img className='header__imgReal' src={real_est} alt="real_est"/>
            </div>
        </div>
    );
};

export default Header;