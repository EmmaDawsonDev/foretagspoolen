import React, { useState } from "react";
//import * as Firebase from "./firebase/firebase.utils";

import TheHeader from "../../components/the-header/the-header";

import "./login.scss";

const LoginPage = ({ handleSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <React.Fragment>
      <TheHeader title="Login" />

      <main className="sign-in">
        <form onSubmit={(e) => handleSubmit(e, email, password)}>
          <section className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </section>

          <section className="password">
            <label htmlFor="password">Lösenord</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </section>

          <button className="base" type="submit">
            Sign In
          </button>
        </form>
      </main>
    </React.Fragment>
  );
};

export default LoginPage;
