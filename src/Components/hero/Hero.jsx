import React, { useState, useEffect, useRef } from 'react';
import "./Hero.scss"
import Mob from "../../assets/mob.jpg";
import Aos from "aos";
import "aos/dist/aos.css";



function Hero() {
    

    useEffect(()=>{
        Aos.init({ duration: 1000})
    });

    


  return (
    <section className="hero">
        <div className="hero__container wrapper">
            <div className="hero__left" data-aos="fade-right">
                <img src={Mob} alt="hero" />
            </div>

            <div className="hero__right" data-aos="zoom-in-up">
                <h1>Make is easier your crypto transaction</h1>
                <p>Stay ahead in the world of crypto. Track real-time prices, explore trending coins, and make informed decisions — all in one sleek dashboard.</p>

                     <a href="" className='btn'> Try For Free</a>
            </div>
        </div>
    </section>
  )
}

export default Hero