import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        src={require("./img/amazon_logo.png")}
        alt="amazon logo"
        className="header__logo"
      />
      <div className="header__search">
        <input className="header__input" type="text"></input>
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello,</span>
          <span className="header__optionLineTwo">sign in</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
