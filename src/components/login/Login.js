import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { auth } from "../../firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="./Amazon_logo.svg" alt="amazon logo" />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            className="login__input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            className="login__input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login__signInBtn">
            Sign In
          </button>
          <p>
            By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy
            Notice, our Cookies Notice and our Interest-Based Ads Notice.
          </p>
          <button onClick={register} className="login__registerBtn">
            Create your Amazon account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
