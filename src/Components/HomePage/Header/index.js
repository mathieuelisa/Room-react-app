import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../Assets/Icons/logo.svg";
import "./styles.scss";

function Header({ myMenu, myLink }) {
  useEffect(() => {
    document.title = "ROOM | Find your happiness with our website";
  }, []);

  return (
    <div className={myMenu}>
      <img src={Logo} />
      <NavLink className={myLink} to="/" exact>
        HOME
      </NavLink>
      <NavLink className={myLink} to="/shop">
        SHOP
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
