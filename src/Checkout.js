import React, { useState } from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div>
      <div className="checkout__creditad">
        <img
          className="checkout__creditcard"
          src={require("./img/credit_card.png")}
          alt="credit card"
        />
        <h3 className="credit__primary">
          No risk eligibility check in 60 seconds & no impact on your credit score. Get up to £1,500
          credit limit.
        </h3>
        <span className="credit__secondary">
          {" "}
          Amazon EU S.a.r.l (credit broker).Capital One is the lender.
        </span>
        <button className="credit__button">Check now</button>
      </div>
      <div className="checkout">
        <div className="checkout__items">
          <h3 className="checkout__name">Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              className="checkout__product"
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>

        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
