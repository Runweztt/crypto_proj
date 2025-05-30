import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.scss'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Foot.scss';
import logo from '../../assets/logo.png';


function Login() {
  const [formdata, setFormdata] = useState([])
 const navigate = useNavigate()

  const emailInput = useRef(null)
  const passwordInput = useRef(null)
  const errors = []

    const handlesubmit =(e) => {
      e.preventDefault();
       const email = emailInput.current.value.trim()
       const password = passwordInput.current.value.trim()

       if(!email||!password){
        errors.push(`fill form`)
       }if(password.length < 6){
        errors.push(`enter strong password`)
       } if(errors.length > 0 ){
        setFormdata(errors)
        return
       }

       const userdata ={email,password};
       localStorage.setItem('userinfo', JSON.stringify(userdata))
       setFormdata(`form fill correctly`)

       emailInput.current.value = ''
       passwordInput.current.value= ''

        navigate('/Main')
    }
  return (
    <>
    <section className='form__reg'>

      <h1>login</h1>

      <form action="" onSubmit={ handlesubmit}>
        <input type="email" placeholder='enter mail' required ref={emailInput} />
        <input type='password' placeholder='enter password ' required ref={passwordInput}/>
           <button className='btn' type='submit'> login </button>
      </form>

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
                        <a href="#"className='footer__icon'><FaInstagram /></a>
                        <a href="#"className='footer__icon'><FaTwitter /></a>
                        <a href="#"className='footer__icon'><FaLinkedin /></a>
                        <a href="#"className='footer__icon'><FaYoutube /></a>
                            </div>
                        </div>
                    </div>
                </footer>
    


</>
  )
}

export default Login