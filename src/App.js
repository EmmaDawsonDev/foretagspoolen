import { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage";

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
      </Switch>
    </div>
  );
}

export default App;
