import React from "react";

import "./filter-dropdown.scss";

const FilterDropdown = ({ filterCourses }) => {
  return (
    <section className="filter-dropdown">
      <label htmlFor="filter-by-course">Filtrera:</label>

      <select
        name="filter-by-course"
        id="filter-by-course"
        onChange={filterCourses}
      >
        <option value="">Utbildningar</option>
        <option value="WU">WU</option>
        <option value="ITP">ITP</option>
        <option value=".NET">.NET</option>
        <option value="JAVA">JAVA</option>
        <option value="FEU">FEU</option>
        <option value="JSU">JSU</option>
        <option value="APP">APP</option>
        <option value="TEST">TEST</option>
      </select>
    </section>
  );
};

export default FilterDropdown;
