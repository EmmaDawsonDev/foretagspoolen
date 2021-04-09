import React from "react";

import BaseButton from "../base-button/base-button";

import "./company.scss";

const Company = () => {
  return (
    <li className="company-item">
      <h3>Namn</h3>
      <section>
        <p>WU </p>
        <p>JSU</p>
        <p>ITP</p>
        <p>ITP</p>
        <p>ITP</p>
        <p>ITP</p>
        <p>ITP</p>
      </section>
      <BaseButton type="base">Mer info</BaseButton>
    </li>
  );
};

export default Company;
