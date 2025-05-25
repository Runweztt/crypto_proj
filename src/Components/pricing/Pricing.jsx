import React from 'react'
import "./Pricing.scss";
import { pricingInfo } from "../../Data";

function Pricing() {


    return (
        <section className="pricing">
            <h2>best crypto currently</h2>
            <div className="pricing__container wrapper">
                {
                    pricingInfo.map(({ image, name, price }) => (
                        <div className="pricing__card" key={name}>
                            <img src={image} alt={name} />
                            <h3>{name}</h3>
                            <span>{price}</span>
                            <a href="" className="btn">Buy it now</a>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}

export default Pricing