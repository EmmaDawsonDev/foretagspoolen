import React from "react";

import Company from "../company/company";

import "./company-list.scss";

const CompanyList = () => {
  return (
    <ul className="company-list">
      <Company />
      <Company />
      <Company />
    </ul>
  );
};

export default CompanyList;
