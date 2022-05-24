import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__header">
        <div className="payment__logobox">
          <Link to="/">
            <img
              src={require("./img/amazon_logo_dark.webp")}
              alt="amazon logo"
              className="header__logo"
            />
          </Link>
          <Link className="link link-logo" to="/">
            <span class="payment-logo-locale">.co.uk</span>
          </Link>
        </div>

        <h1>
          Checkout (<Link to="/checkout">{basket.length} items</Link>)
        </h1>
      </div>
      <div className="payment__container">
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery address</h3>
            <div className="payment__address">
              <p>{user?.email}</p>
              <p>22 React Lane</p>
              <p>W1T 1FB London</p>
            </div>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__review">
            <h3>Review items and delivery</h3>
            <div className="payment__items">
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__details"></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
