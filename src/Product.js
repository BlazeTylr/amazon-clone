import React from "react";
import "./Product.css";
import StarRateIcon from "@mui/icons-material/StarRate";

function Product({ id, title, image, price, price_fraction, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>£</small>
          <strong>
            {price}
            <sup className="product__price-secondary">{price_fraction}</sup>
          </strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarRateIcon />
            ))}
        </div>
      </div>
      <img src={image} alt="React book" />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
