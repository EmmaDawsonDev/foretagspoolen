import React from "react";

import BaseButton from "../base-button/base-button";

import "./company.scss";

const Company = ({ data }) => {
  return (
    <li className="company-item">
      <h3>{data.name}</h3>
      <section>
        {data.utbildningar.map((utbildning, index) => (
          <p key={index}>{utbildning}</p>
        ))}
      </section>
      <BaseButton color="base">Mer info</BaseButton>
    </li>
  );
};

export default Company;
