import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import * as Firebase from "./firebase/firebase.utils";

import Homepage from "./pages/homepage/homepage";

import Login from './pages/login/login'
import AdminCompanies from './pages/admin-companies/admin-companies'

import './App.css'

function App() {
  const [companyData, setCompanyData] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [loginError, setLoginError] = useState('')

  useEffect(() => {
    const currentTime = Date.now()
    const companyDataExpiry = sessionStorage.getItem('companyDataExpiry')
    const companyDataCache = sessionStorage.getItem('companyData')

    if (currentTime < companyDataExpiry && companyDataCache) {
      setCompanyData(JSON.parse(companyDataCache))
    } else {
      readDatabase()
    }

    Firebase.auth.onAuthStateChanged(user => {
      setUser(user)
      if (!user) {
        setIsLoggedIn(false)
      } else {
        setIsLoggedIn(true)
      }
    })
  }, [])

  const handleSubmit = (e, email, password) => {
    e.preventDefault()
    Firebase.auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user
        setUser(user)
        setIsLoggedIn(true)
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        setLoginError(errorMessage)
        console.log(errorCode, errorMessage)
      })
  }

  const handleSignout = e => {
    //e.preventDefault();
    Firebase.auth
      .signOut()
      .then(() => {
        setUser(null)
        setIsLoggedIn(false)
        console.log('Successfully logged out')
      })
      .catch(error => {
        console.log(error)
      })
  }

  const readDatabase = () => {
    return Firebase.db
      .collection('companies')
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        setCompanyData([...data])
        const expiryTime = Date.now() + 86400000
        sessionStorage.setItem('companyData', JSON.stringify([...data]))
        sessionStorage.setItem('companyDataExpiry', expiryTime)
      })
  }

  // const addCompanyData = (newCompany) => {
  //   const updatedCompanyData = [...companyData, newCompany];
  //   sessionStorage.setItem("companyData", JSON.stringify(updatedCompanyData));
  //   setCompanyData(updatedCompanyData);
  // };

  // const updateCompanyData = (updatedCompany) => {
  //   const removeUpdated = companyData.filter(
  //     (company) => company.namn !== updatedCompany.namn
  //   );
  //   const updatedCompanyData = [...removeUpdated, updatedCompany];
  //   sessionStorage.setItem("companyData", JSON.stringify(updatedCompanyData));
  //   setCompanyData(updatedCompanyData);
  // };

  // const deleteCompanyData = (deletedCompanyId) => {
  //   const updatedCompanyData = companyData.filter(
  //     (company) => company.id !== deletedCompanyId
  //   );
  //   sessionStorage.setItem("companyData", JSON.stringify(updatedCompanyData));
  //   setCompanyData(updatedCompanyData);
  // };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={props => <Homepage {...props} companyData={companyData} />} />
        <Route
          exact
          path="/login"
          render={props =>
            user && isLoggedIn ? <Redirect to="/admin" /> : <Login {...props} handleSubmit={handleSubmit} loginError={loginError} />
          }
        />
        <Route
          exact
          path="/admin"
          render={props =>
            !isLoggedIn || !user ? (
              <Redirect to="/login" />
            ) : (
              <AdminCompanies
                {...props}
                companyData={companyData}
                isLoggedIn={isLoggedIn}
                // addCompanyData={addCompanyData}
                // updateCompanyData={updateCompanyData}
                // deleteCompanyData={deleteCompanyData}
                readDatabase={readDatabase}
                handleSignout={handleSignout}
              />
            )
          }
        />
      </Switch>
    </div>
  )
}

export default App;
