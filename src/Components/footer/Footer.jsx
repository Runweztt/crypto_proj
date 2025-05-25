import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Footer.scss';
import logo from '../../assets/logo.png';




function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container wrapper">
            <div className="footer__col">
                <img src={logo} alt="logo" />
                <p>© 2025 CryptoTrack. All rights reserved. Built for enthusiasts, traders, and curious minds – join us on the journey to smarter crypto decisions.</p>
            </div>


            <div className="footer__col">
                <h3>About</h3>
                <a href="">about us</a>
                     <a href="">feature</a>
                          <a href="">News</a>
            
            </div>
               <div className="footer__col">
                <h3>company</h3>
                <a href="">jiboexchange</a>
                     <a href="">security</a>
                          <a href="">banking</a>
            
            </div>
               <div className="footer__col">
                <h3>support</h3>
                <a href="">FAQ</a>
                     <a href="">contact us </a>
                          <a href="">support</a>
            
            </div>

            <div className="footer__col">
                <h3>socials</h3>
                <div className="footer__icons">
                     <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaYoutube /></a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer