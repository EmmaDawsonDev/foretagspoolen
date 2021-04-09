import React from "react";

import TheHeader from "../../components/the-header/the-header";
import CompanyList from "../../components/company-list/company-list";

import "./homepage.scss";

const Homepage = () => {
  return (
    <React.Fragment>
      <TheHeader />
      <main className="homepage-wrapper">
        <CompanyList />
      </main>
    </React.Fragment>
  );
};

export default Homepage;
