import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src={require("./img/amazon_credit_ad.webp")}
          alt="amazon ad"
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
