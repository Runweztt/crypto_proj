import React from 'react'
import "./Status.scss"
import statusimg from "../../assets/status.png";

function Status() {
    return (
        <section className="status">
            <div className="status__container wrapper">
                <div className="status__left">
                    <h2>Trust us due to our safe and convenient deposit</h2>
                    <p>Your safety is our priority. We use advanced encryption
                        and real-time monitoring to keep your assets and data
                        secure—so you can trade and earn with total peace of mind</p>
                    <a href="" className='btn'>know more</a>
                </div>

                <div className="status_right">
                    <img src={statusimg} alt="status" />
                </div>
            </div>
        </section>
    )
}

export default Status