import React from "react";

import Company from "../company/company";

import "./company-list.scss";

const CompanyList = ({ companyData }) => {
  return (
    <ul className="company-list">
      {companyData.map((company) => (
        <Company key={company.id} data={company} />
      ))}
    </ul>
  );
};

export default CompanyList;
