import React from "react";

import "./sort-dropdown.scss";

const SortDropdown = ({ sortCourses }) => {
  return (
    <section className="sort-dropdown">
      <label htmlFor="sort-course">Sortera</label>

      <select name="sort-course" id="sort-course" onChange={sortCourses}>
        <option value="A-Ö">A-Ö</option>
        <option value="Ö-A">Ö-A</option>
        <option value="timestamp">Senast uppdaterad</option>
      </select>
    </section>
  );
};

export default SortDropdown;
