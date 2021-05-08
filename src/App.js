import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import * as Firebase from "./firebase/firebase.utils";

import Homepage from "./pages/homepage/homepage";
import CompanyDetails from "./pages/CompanyDetails/company-details";
import Login from "./pages/login/login";
import AdminCompanies from "./pages/admin-companies/admin-companies";

import "./App.css";

function App() {
  const [companyData, setCompanyData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  console.log(user, isLoggedIn);

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

    Firebase.auth.onAuthStateChanged((user) => {
      setUser(user);
      setIsLoggedIn(true);
      console.log(user);
    });
  }, []);

  const handleSubmit = (e, email, password) => {
    e.preventDefault();
    Firebase.auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        setIsLoggedIn(true);
        console.log("I worked!");
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

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
          render={(props) =>
            isLoggedIn ? (
              <Redirect to="/admin" />
            ) : (
              <Login {...props} handleSubmit={handleSubmit} />
            )
          }
        />
        <Route
          exact
          path="/admin"
          render={(props) =>
            !isLoggedIn ? (
              <Redirect to="/login" />
            ) : (
              <AdminCompanies
                {...props}
                companyData={companyData}
                isLoggedIn={isLoggedIn}
              />
            )
          }
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
