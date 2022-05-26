import React from "react";
import "../product/Product";
import StarRateIcon from "@mui/icons-material/StarRate";
import { ExternalLink } from "react-external-link";

function Portfolio({ id, title, image, price, price_fraction, rating }) {
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

      <img src={image} alt="developer" />
      <ExternalLink href="https://balazs-szabo-portfolio.netlify.app/">
        <button className="portfolio">Portfolio</button>
      </ExternalLink>
    </div>
  );
}

export default Portfolio;
