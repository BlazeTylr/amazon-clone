import React from "react";
import "./Product.css";
import StarRateIcon from "@mui/icons-material/StarRate";

function Product({ id, title, image, price, price_fraction, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <sup className="currency">£</sup>
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
      <button className="addToBasket">Add to basket</button>
    </div>
  );
}

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

export default Product;
