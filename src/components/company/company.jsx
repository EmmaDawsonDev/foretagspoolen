import React from "react";
import { Link } from "react-router-dom";

import "./company.scss";

const Company = ({ data }) => {
  return (
    <li className="company-item">
      <h3>{data.namn}</h3>
      <section>
        {data.utbildningar.map((utbildning, index) => (
          <p key={index}>{utbildning}</p>
        ))}
      </section>
      <Link
        className="more-info-link"
        aria-label={`Öppna sidan med mer info om ${data.namn}`}
        to={encodeURI(data.namn)}
      >
        Mer info
      </Link>
    </li>
  );
};

export default Company;
