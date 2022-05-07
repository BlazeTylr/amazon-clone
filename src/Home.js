import React from "react";
import "./Home.css";
import Product from "./Product";
import Portfolio from "./Portfolio";

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
        <div className="home__row thirdRow">
          <Product
            title={
              "Javascript Logo. 11 Oz Ceramic Coffee Mug Also Makes A Great Tea Cup with Its Large, Easy to Grip C-Handle."
            }
            price={12}
            price_fraction={99}
            image={require("./img/javascript_mug.webp")}
            rating={4}
          />
          <Portfolio
            title={
              "React developer. Reliable, hardworking, accurate & team player."
            }
            price={"get in touch"}
            price_fraction={""}
            image={require("./img/profile-pic.webp")}
            rating={5}
          />
          <Product
            title={
              "DELL - DISPLAY B2B DELL ULTRASHARP 27 4K USB-C HUB MONITOR - U2723QE - 68.47CM."
            }
            price={843}
            price_fraction={64}
            image={require("./img/dell_monitor.webp")}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title={
              "IBM wireless keyboard. Opto-Mechanical Keys, Optical Drive, Key Stabilizer Bar, Unmatched Durability."
            }
            price={129}
            price_fraction={99}
            image={require("./img/IBM_Model_M.webp")}
            rating={2}
          />
          <Product
            title={
              "Microsoft Windows Professional 32 / 64 bit - License Only. Most advanced operating system."
            }
            price={98}
            price_fraction={99}
            image={require("./img/Microsoft_Windows.webp")}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
