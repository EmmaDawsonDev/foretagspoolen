import React from "react";
import TheHeader from "../../components/the-header/the-header";

import "./admin-companies.scss";

const AdminCompanies = (props) => {
  console.log(props);
  return (
    <div>
      <TheHeader title="Admin" />
      <main className="admin-wrapper">
        <p>This is the admin page</p>
      </main>
    </div>
  );
};

export default AdminCompanies;
