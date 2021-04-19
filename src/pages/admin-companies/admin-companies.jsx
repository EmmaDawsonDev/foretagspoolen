import React, { useState } from "react";
import TheHeader from "../../components/the-header/the-header";
import AdminCompanyList from "../../components/admin-company-list/admin-company-list";
import SearchBar from "../../components/search-bar/search-bar";

import "./admin-companies.scss";

const AdminCompanies = ({ companyData }) => {
  const [adminSearchTerm, setAdminSearchTerm] = useState("");

  const setSearch = (e) => {
    setAdminSearchTerm(e.target.value);
    console.log(adminSearchTerm);
  };

  const filteredCompaniesBySearch = companyData.filter((company) =>
    company.namn.toLowerCase().includes(adminSearchTerm.toLowerCase())
  );

  return (
    <div>
      <TheHeader title="Admin" />
      <main className="admin-wrapper">
        <section className="admin-search">
          <SearchBar searchTerm={adminSearchTerm} setSearch={setSearch} />
        </section>
        {companyData ? (
          <AdminCompanyList companyData={filteredCompaniesBySearch} />
        ) : (
          <h6>Inga resultat</h6>
        )}
      </main>
    </div>
  );
};

export default AdminCompanies;
