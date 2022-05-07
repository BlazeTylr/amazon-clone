import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

function Header() {
  return (
    <div className="header">
      <div className="header__logo-box">
        <img
          src={require("./img/amazon_logo.png")}
          alt="amazon logo"
          className="header__logo"
        />
        <span class="nav-logo-locale">.co.uk</span>
      </div>
      <div className="header__search">
        <input className="header__searchInput" type="text"></input>
        <SearchIcon className="header__searchIcon" />
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
        <div className="header__optionBasket md-18">
          <ShoppingCartCheckoutIcon sx={{ fontSize: 34 }} />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
