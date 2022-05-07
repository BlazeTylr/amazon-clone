import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={require("./img/amazon_hero.webp")}
          alt="amazon hero img"
        />
        <div className="home__row">
          <Product
            title={"React Cookbook: Recipes for Mastering the React Framework"}
            price={29}
            price_fraction={99}
            image={require("./img/react_cookbook.webp")}
            rating={5}
          />
          <Product
            title={
              "2021 Apple MacBook Pro (16-inch, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 512GB SSD) - Space Grey"
            }
            price={2119}
            price_fraction={97}
            image={require("./img/macbookpro_16inch.webp")}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
