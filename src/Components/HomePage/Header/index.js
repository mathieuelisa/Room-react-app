import { NavLink, useHistory } from "react-router-dom";
// Import styles
import "./styles.scss";

function Header({ myMenu, myLink, myMenuLogo, logo }) {
  const history = useHistory();
  const Redirection = () => {
    let url = "/";
    history.push(url);
  };

  return (
    <div className={myMenu}>
      <img className={myMenuLogo} src={logo} alt="logo" onClick={Redirection} />
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
