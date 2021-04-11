import React, { useState } from "react";

import TheHeader from "../../components/the-header/the-header";
import CompanyList from "../../components/company-list/company-list";
import SearchBar from "../../components/search-bar/search-bar";
import FilterDropdown from "../../components/filter-dropdown/filter-dropdown";
import SortDropdown from "../../components/sort-dropdown/sort-dropdown";

import "./homepage.scss";

const Homepage = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterByCourse, setFilterByCourse] = useState("");
  const [sortBy, setSortBy] = useState("A-Ö");

  console.log(("HP", props));

  const setSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterCourses = (e) => {
    console.log(e.target.value);
    setFilterByCourse(e.target.value);
  };

  const sortCourses = (e) => {
    console.log(e.target.value);
    setSortBy(e.target.value);
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

  let filteredAndSorted = "";

  if (sortBy === "A-Ö") {
    filteredAndSorted = filteredCompanies.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }
  if (sortBy === "Ö-A") {
    filteredAndSorted = filteredCompanies.sort((a, b) =>
      b.name.localeCompare(a.name)
    );
  }
  if (sortBy === "timestamp") {
    filteredAndSorted = filteredCompanies.sort(
      (a, b) => b.timestamp - a.timestamp
    );
  }

  return (
    <React.Fragment>
      <TheHeader />
      <main className="homepage-wrapper">
        <section className="search">
          <SearchBar searchTerm={searchTerm} setSearch={setSearch} />
          <FilterDropdown filterCourses={filterCourses} />
          <SortDropdown sortCourses={sortCourses} />
        </section>
        {filteredCompanies.length > 0 ? (
          <CompanyList companyData={filteredAndSorted} />
        ) : (
          <h6>Inga resultat</h6>
        )}
      </main>
    </React.Fragment>
  );
};

export default Homepage;
