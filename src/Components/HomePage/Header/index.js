import { NavLink } from "react-router-dom";
import "./styles.scss";

function Header({ myMenu, myLink }) {
  return (
    <div className={myMenu}>
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
