import React from "react";

import "./admin-filter-dropdown.scss";

const AdminFilterDropdown = ({ filterCompanies }) => {
  return (
    <section className="admin-filter-dropdown">
      <label htmlFor="filter-by-course">Filtrera</label>

      <select
        name="filter-by-course"
        id="filter-by-course"
        onChange={filterCompanies}
      >
        <option value=""></option>
        <option value="IngenUtbildning">Utbildningsfält tomt</option>
        <option value="WU">WU</option>
        <option value="ITP">ITP</option>
        <option value=".NET">.NET</option>
        <option value="JAVA">JAVA</option>
        <option value="FEU">FEU</option>
        <option value="JSU">JSU</option>
        <option value="APP">APP</option>
        <option value="TEST">TEST</option>
        <option value="ITHSMatchar">ITHS Matchar</option>
        <option value="Osynlig">Osynlig för studerande</option>
      </select>
    </section>
  );
};

export default AdminFilterDropdown;
