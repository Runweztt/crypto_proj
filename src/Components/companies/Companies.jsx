import React, { useEffect } from "react";
import "./Companies.scss";
import { companyInfo } from "../../Data.js";

function Companies() {
 

  return (
    <section className="companies">
      <div className="companies__container wrapper">
        {companyInfo.map(({ id, img }) => (
          <img
            key={id}
            src={img}
            alt={`company-${id}`}
            className={`company-${id}`} 
            loading="lazy" 
          />
        ))}
      </div>
    </section>
  );
}

export default Companies;
