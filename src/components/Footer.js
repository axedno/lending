import React from 'react';
import facebook from '../images/facebook-logo.png'
import linkedin from '../images/linked-in-logo-of-two-letters.png'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__block'>
                <p className='footer__filancy'>© 2018. All rights reserved by Filancy.</p>
                <div className='footer__logoBlock'>
                    <img className='footer__face' src={facebook} alt="Facebook"/>
                    <img className='footer__link' src={linkedin} alt="linkedIn"/>
                </div>
                <p className='footer__gmail'>info@filancy.com</p>
            </div>
        </footer>
    );
};

export default Footer;