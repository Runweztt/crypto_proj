import React from 'react'
import img from "../../assets/earnings.png"
import "./Earning.scss"

function Earning() {
  return (
         <section className="earnings">
          <div className="earnings__container wrapper">
            <div className="earnings__left">
              <img src={img} alt="earning" />
            </div>

            <div className="earnings__right">
              <h2>Track your earning and crypto made easy </h2>
              <p>Start earning effortlessly with the most trusted crypto platform. Whether
                 you're a beginner or a pro, discover smart ways to grow your assets and earn
                  daily rewards—securely and fast."</p>

                  <a href="" className='btn'>Get started</a>
            </div>
          </div>
         </section>
  )
}

export default Earning