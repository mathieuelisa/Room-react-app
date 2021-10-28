import { NavLink } from "react-router-dom";
import "./styles.scss";

function Header() {
  return (
    <div>
      <NavLink to="/" exact>
        HOME
      </NavLink>
      <NavLink to="/shop">SHOP</NavLink>
      <NavLink to="/about">ABOUT</NavLink>
      <NavLink to="/contact">CONTACT</NavLink>
    </div>
  );
}

export default Header;
