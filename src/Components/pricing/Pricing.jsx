import React, { useEffect, useState } from "react";
import "./Pricing.scss";
import { pricingInfo } from "../../Data";

function Pricing() {
    const [livePrices, setLivePrices] = useState({});

    useEffect(() => {
        const fetchPrices = async () => {
            try {
                const coinIds = pricingInfo.map(coin => coin.id).join(',');
                const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinIds}&vs_currencies=usd`);
                const data = await res.json();
                console.log("API response:", data); // Debug line
                setLivePrices(data);
            } catch (error) {
                console.error("Error fetching crypto prices:", error);
            }
        };

        fetchPrices();

        const interval = setInterval(fetchPrices, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="pricing">
            <h2>Best Crypto Currently</h2>
            <div className="pricing__container wrapper">
                {
                    pricingInfo.map(({ id, image, name }) => (
                        <div className="pricing__card" key={id}>
                            <img src={image} alt={name} />
                            <h3>{name}</h3>
                            <span>
                                {
                                    livePrices[id]
                                        ? `$${livePrices[id].usd.toLocaleString()}`
                                        : "Loading..."
                                }
                            </span>
                            <a href="#" className="btn">Buy it now</a>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Pricing;
