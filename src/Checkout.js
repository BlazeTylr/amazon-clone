import React, { useState } from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <img src={require("./img/amazon_credit_ad.webp")} alt="amazon ad" className="checkout__ad" />
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
  );
}

export default Checkout;
