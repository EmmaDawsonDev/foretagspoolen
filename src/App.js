import { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage";
import CompanyDetails from "./pages/CompanyDetails/company-details";

import COMPANY_DATA from "./companydata";
import "./App.css";

function App() {
  const [companyData, setCompanyData] = useState(COMPANY_DATA);

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Homepage {...props} companyData={companyData} />}
        />
        <Route
          path="/:companyname"
          render={(props) => (
            <CompanyDetails {...props} companyData={companyData} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
