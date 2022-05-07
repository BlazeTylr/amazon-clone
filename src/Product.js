import React from "react";
import "./Product.css";
import StarRateIcon from "@mui/icons-material/StarRate";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>React Cookbook: Recipes for Mastering the React Framework</p>
        <p className="product__price">
          <small>£</small>
          <strong>
            32<sup className="product__price-secondary">52</sup>
          </strong>
        </p>
        <div className="product__rating">
          <StarRateIcon />
          <StarRateIcon />
          <StarRateIcon />
          <StarRateIcon />
          <StarRateIcon />
        </div>
      </div>
      <img src={require("./img/react_cookbook.webp")} alt="React book" />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
