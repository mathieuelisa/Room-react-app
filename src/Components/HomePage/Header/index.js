import { useEffect } from "react";
import { NavLink } from "react-router-dom";

// import LogoWhite from "../../../Assets/Icons/room-white.svg";

import "./styles.scss";

function Header({ myMenu, myLink, myMenuLogo, logo }) {
  useEffect(() => {
    document.title = "ROOM | Find your happiness with our website";
  }, []);

  return (
    <div className={myMenu}>
      <img className={myMenuLogo} src={logo} alt="logo" />
      <NavLink className={myLink} to="/" exact>
        HOME
      </NavLink>
      <NavLink className={myLink} to="/products">
        PRODUCTS
      </NavLink>
      <NavLink className={myLink} to="/about">
        ABOUT
      </NavLink>
      <NavLink className={myLink} to="/contact">
        CONTACT
      </NavLink>
    </div>
  );
}

export default Header;
