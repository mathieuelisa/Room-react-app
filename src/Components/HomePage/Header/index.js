import { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";

import "./styles.scss";

function Header({ myMenu, myLink, myMenuLogo, logo }) {
  useEffect(() => {
    document.title = "ROOM | Find your happiness with our website";
  }, []);

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
