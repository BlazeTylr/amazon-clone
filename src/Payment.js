import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();

  const [{ basket, user }, dispatch] = useStateValue();

  const removeItemsFromBasket = () => {
    dispatch({
      type: "EMPTY_BASKET",
    });
    navigate("/");
  };

  return (
    <div className="payment">
      <div className="payment__header">
        <div className="payment__logobox">
          <Link to="/">
            <img
              src={require("./img/amazon_logo_dark.webp")}
              alt="amazon logo"
              className="payment__logo"
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
        <div className="payment__section payment__section-method">
          <div className="payment__title">
            <h3>Payment method</h3>
            <p className="payment__title-credit">Amazon credit card</p>
          </div>
          <div className="payment__details">
            <div className="payment__subtotal">
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <p>
                      Subtotal ({basket.length} items):
                      <strong> {value}</strong>
                    </p>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousendSeparator={true}
                prefix={"£"}
              />
              <p className="payment__vat">Order totals include VAT.</p>
              <p className="payment__terms">
                By placing your order you agree to Amazon's Conditions of Use & Sale. Please see our
                Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
              </p>
              <button onClick={removeItemsFromBasket}>Buy now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
