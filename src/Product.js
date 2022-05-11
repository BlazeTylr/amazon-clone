import React from "react";
import "./Product.css";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useStateValue } from "./StateProvider";

//////////////////////////////////
// Reveal sections

const allSections = document.querySelectorAll(".section_hide");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.25,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

function Product({ id, title, image, price, rating, whole, fraction }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("this is the basket", basket);
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
          <strong>{whole}</strong>
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
