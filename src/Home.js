import React from "react";
import "./Home.css";
import Product from "./Product";
import Portfolio from "./Portfolio";

function Home() {
  const allSections = document.querySelectorAll(".section_hide");

  const revealSection = function (entries, observer) {
    const [entry] = entries;
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
            price={29.99}
            whole={29}
            fraction={99}
            image={require("./img/react_cookbook.webp")}
            rating={5}
          />
          <Product
            title={
              "2021 Apple MacBook Pro (16-inch, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 512GB SSD) - Space Grey"
            }
            price={2119.99}
            whole={"2,119"}
            fraction={99}
            image={require("./img/macbookpro_16inch.webp")}
            rating={5}
          />
        </div>
        <div className="home__row thirdRow">
          <Product
            title={"Javascript Logo. 11 Oz Ceramic Coffee Mug. Easy to Grip C-Handle."}
            price={12.98}
            whole={12}
            fraction={98}
            image={require("./img/javascript_mug.webp")}
            rating={4}
          />
          <Portfolio
            title={"React developer. Reliable, hardworking, accurate & team player."}
            price={"get in touch"}
            image={require("./img/profile-pic.webp")}
            rating={5}
          />
          <Product
            title={"DELL - DISPLAY B2B DELL ULTRASHARP 27 4K USB-C HUB MONITOR."}
            price={843.87}
            whole={843}
            fraction={87}
            image={require("./img/dell_monitor.webp")}
            rating={4}
          />
        </div>
        <div className="section_hide home__row">
          <Product
            title={
              "IBM wireless keyboard. Opto-Mechanical Keys, Optical Drive, Key Stabilizer Bar, Unmatched Durability."
            }
            price={129.45}
            whole={129}
            fraction={45}
            image={require("./img/IBM_Model_M.webp")}
            rating={2}
          />
          <Product
            title={
              "Microsoft Windows Professional 32 / 64 bit - License Only. Most advanced operating system."
            }
            price={98.99}
            whole={98}
            fraction={99}
            image={require("./img/Microsoft_Windows.webp")}
            rating={5}
          />
        </div>
        <div className="section_hide home__row">
          <Product
            title={"Javascript Logo. 11 Oz Ceramic Coffee Mug. Easy to Grip C-Handle."}
            price={12.98}
            whole={12}
            fraction={98}
            image={require("./img/javascript_mug.webp")}
            rating={4}
          />
          <Portfolio
            title={"React developer. Reliable, hardworking, accurate & team player."}
            price={"get in touch"}
            image={require("./img/profile-pic.webp")}
            rating={5}
          />
          <Product
            title={
              "DELL - DISPLAY B2B DELL ULTRASHARP 27 4K USB-C HUB MONITOR - U2723QE - 68.47CM."
            }
            price={843.87}
            whole={843}
            fraction={87}
            image={require("./img/dell_monitor.webp")}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
