import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import * as Firebase from "./firebase/firebase.utils";

import Homepage from "./pages/homepage/homepage";
import CompanyDetails from "./pages/CompanyDetails/company-details";
import Login from "./pages/login/login";

import "./App.css";

function App() {
  const [companyData, setCompanyData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(setIsLoggedIn);

  useEffect(() => {
    Firebase.db
      .collection("companies")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCompanyData([...data]);
        console.log(data);
      });
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Homepage {...props} companyData={companyData} />}
        />
        <Route
          exact
          path="/login"
          render={(props) => <Login {...props} auth={isLoggedIn} />}
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
