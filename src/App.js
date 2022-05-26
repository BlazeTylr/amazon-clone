import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import Payment from "./components/payment/Payment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the App component loads.
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>>", authUser);

      if (authUser) {
        // the user logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged oout

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={[<Login />]} />
          <Route path="/" element={[<Header />, <Home />, <Footer />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />, <Footer />]} />
          <Route path="/payment" element={[<Payment />, <Footer />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
