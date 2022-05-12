import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const authenticationHandler = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <div className="header__logo-box">
        <Link to="/">
          <img src={require("./img/amazon_logo.png")} alt="amazon logo" className="header__logo" />
        </Link>
        <Link className="link" to="/">
          <span class="nav-logo-locale">.co.uk</span>
        </Link>
      </div>
      <div className="header__search">
        <input className="header__searchInput" type="text"></input>
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link className="link" to={!user && "/login"}>
          <div onClick={authenticationHandler} className="header__option">
            <span className="header__optionLineOne">Hello,</span>
            <span className="header__optionLineTwo">{user ? "Sign out" : "Sign in"}</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket md-18">
            <ShoppingCartCheckoutIcon sx={{ fontSize: 34 }} />
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
