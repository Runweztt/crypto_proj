import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Foot.scss';
import logo from '../../assets/logo.png';

function Register() {

    const [formdata, setFormdata] = useState([])
    const navigate = useNavigate()

    const FirstInput = useRef(null);
    const LastInput = useRef(null);
    const EmailInput = useRef(null)
    const PasswordInput = useRef(null);
    const errors = []

    const handleSUbmit = (e) => {
        e.preventDefault();

        const firstname = FirstInput.current.value.trim();
        const lastname = LastInput.current.value.trim();
        const Email = EmailInput.current.value.trim();
        const password = PasswordInput.current.value.trim();

        if (!firstname || !lastname || !Email || !PasswordInput) {
            errors.push(`fill all form`);
        } if (password.length < 6) {
            errors.push(`enter strong password`)
        } if (!Email.includes('@')) {
            errors.push(`enter valid email`)
        } if (errors.length > 0) {
            setFormdata(errors);
            return;
        }

        const userData = { firstname, lastname, Email, password };
        localStorage.setItem('userinfo', JSON.stringify(userData))
        setFormdata([`form fill correctly`])


        FirstInput.current.value = ''
        LastInput.current.value = ''
        EmailInput.current.value = ''
        PasswordInput.current.value = ''

        navigate('/Main')

    }

    return (
        <>
            <section className="form__reg">
                <h1>Register</h1>

                <form action="" onSubmit={handleSUbmit}>

                    <input type="text" placeholder='enter firstname...' required ref={FirstInput} />
                    <input type="text" placeholder='enter lastname....' required ref={LastInput} />
                    <input type="email" placeholder='enter mail address...' required ref={EmailInput} />
                    <input type="password" placeholder='enter password...' required ref={PasswordInput} />
                    <button className='btn' type='submit'> Register</button>
                </form>



                {
                    formdata.map((index, items) => (
                        <div className='form__item' key={index}>{items}</div>
                    ))
                }


            </section>

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
                            <a href="#" className='footer__icon'><FaFacebook /></a>
                            <a href="#" className='footer__icon'><FaInstagram /></a>
                            <a href="#" className='footer__icon'><FaTwitter /></a>
                            <a href="#" className='footer__icon'><FaLinkedin /></a>
                            <a href="#" className='footer__icon'><FaYoutube /></a>
                        </div>
                    </div>
                </div>
            </footer>



        </>
    )
}

export default Register