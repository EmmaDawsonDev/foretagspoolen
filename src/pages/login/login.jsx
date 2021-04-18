import React, { useState } from "react";

import TheHeader from "../../components/the-header/the-header";
import BaseButton from "../../components/base-button/base-button";

import "./login.scss";

const LoginPage = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <React.Fragment>
      <TheHeader title="Login" />

      <main className="sign-in">
        <form onSubmit={handleSubmit}>
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

          <BaseButton color="base" type="submit">
            Sign In
          </BaseButton>
        </form>
      </main>
    </React.Fragment>
  );
};

export default LoginPage;
