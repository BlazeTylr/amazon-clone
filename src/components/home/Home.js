import React from "react";
import "./Home.css";
import Product from "../product/Product";
import Portfolio from "../portfolio/Portfolio";
import Fade from "react-reveal/Fade";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src={require("../../img/amazon_hero.webp")}
          alt="amazon hero img"
        />
        <div className="home__row">
          <Product
            id="12321373"
            title={"React Cookbook: Recipes for Mastering the React Framework"}
            price={29.99}
            whole={29}
            fraction={99}
            image={require("../../img/react_cookbook.webp")}
            rating={5}
          />
          <Product
            id="12321341"
            title={"2021 Apple MacBook Pro (16-inch, Apple M1 Pro chip) - Space Grey"}
            price={2119.99}
            whole={"2,119"}
            fraction={99}
            image={require("../../img/macbookpro_16inch.webp")}
            rating={5}
          />
        </div>
        <div className="home__row section_hide">
          <Product
            id="13481341"
            title={"Javascript Logo. 11 Oz Ceramic Coffee Mug. Easy to Grip C-Handle"}
            price={12.98}
            whole={12}
            fraction={98}
            image={require("../../img/javascript_mug.webp")}
            rating={4}
          />
          <Portfolio
            title={"React developer. Reliable, hardworking, accurate & team player"}
            price={"get in touch"}
            image={require("../../img/profile-pic.webp")}
            rating={5}
          />
          <Product
            id="12382541"
            title={"Dell - Display B2B Dell ULTRASHARP 27 4K USB-C HUB Monitor"}
            price={843.87}
            whole={843}
            fraction={87}
            image={require("../../img/dell_monitor.webp")}
            rating={4}
          />
        </div>
        <Fade bottom>
          <div className="section_hide home__row">
            <Product
              id="12339671"
              title={"IBM wireless keyboard. Opto-Mechanical Keys, Optical Drive"}
              price={129.45}
              whole={129}
              fraction={45}
              image={require("../../img/IBM_Model_M.webp")}
              rating={2}
            />
            <Product
              id="12732121"
              title={"Microsoft Windows Professional 32 / 64 bit - License Only"}
              price={98.99}
              whole={98}
              fraction={99}
              image={require("../../img/Microsoft_Windows.webp")}
              rating={5}
            />
          </div>
        </Fade>
        <Fade bottom>
          <div className="section_hide home__row">
            <Product
              id="12385784"
              title={"Echo Dot (4th generation) | Smart speaker with Alexa"}
              price={27.99}
              whole={27}
              fraction={99}
              image={require("../../img/amazon-echo.webp")}
              rating={4}
            />
            <Product
              id="12320909"
              title={
                "Fire TV Stick with Alexa Voice Remote (includes TV controls) | HD streaming device"
              }
              price={39.99}
              whole={39}
              fraction={99}
              image={require("../../img/fire_stick.webp")}
              rating={4}
            />
            <Product
              id="12387876"
              title={"Van Gogh. The Complete Paintings"}
              price={46.72}
              whole={46}
              fraction={72}
              image={require("../../img/van_gogh.webp")}
              rating={4}
            />
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Home;
