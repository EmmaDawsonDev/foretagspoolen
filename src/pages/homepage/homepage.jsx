import React, { useState } from "react";

import TheHeader from "../../components/the-header/the-header";
import CompanyList from "../../components/company-list/company-list";
import SearchBar from "../../components/search-bar/search-bar";
import FilterDropdown from "../../components/filter-dropdown/filter-dropdown";

import "./homepage.scss";

const Homepage = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterByCourse, setFilterByCourse] = useState("");

  console.log(("HP", props));

  const setSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterCourses = (e) => {
    console.log(e.target.value);
    setFilterByCourse(e.target.value);
  };

  const filteredCompaniesBySearch = props.companyData.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCompanies =
    filterByCourse === ""
      ? filteredCompaniesBySearch
      : filteredCompaniesBySearch.filter((company) =>
          company.utbildningar.includes(filterByCourse)
        );

  return (
    <React.Fragment>
      <TheHeader />
      <main className="homepage-wrapper">
        <section className="search">
          <SearchBar searchTerm={searchTerm} setSearch={setSearch} />
          <FilterDropdown filterCourses={filterCourses} />
        </section>
        {filteredCompanies.length > 0 ? (
          <CompanyList companyData={filteredCompanies} />
        ) : (
          <h6>Inga resultat</h6>
        )}
      </main>
    </React.Fragment>
  );
};

export default Homepage;
