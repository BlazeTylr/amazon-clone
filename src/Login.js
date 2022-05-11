import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="./Amazon_logo.svg" alt="amazon logo" />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input className="login__input" type="text" />
          <h5>Password</h5>
          <input className="login__input" type="password" />
          <button className="login__signInBtn">Sign In</button>
          <p>
            By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy
            Notice, our Cookies Notice and our Interest-Based Ads Notice.
          </p>
          <button className="login__registerBtn">Create your Amazon account</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
