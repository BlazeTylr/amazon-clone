import React from "react";
import "./Product.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useStateValue } from "./StateProvider";

//////////////////////////////////
// Reveal sections

function Product({ id, title, image, price, rating, whole, fraction }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <sup className="currency">£</sup>
          <strong className="priceOffScreen">{price}</strong>
          <strong className="product__price-whole">{whole}</strong>
          <sup className="product__price-fraction">{fraction}</sup>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarRateIcon />
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket} className="addToBasket">
        Add to basket
      </button>
    </div>
  );
}

export default Product;
