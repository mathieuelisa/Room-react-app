// Import Components
import Header from "../../HomePage/Header";
// Import styles
import "./styles.scss";
// Import logo
import LogoWhite from "../../../Assets/Icons/room-white.svg";
import "../../../Assets/Fonts/DolceVita.ttf";
import { useEffect, useState } from "react";

function MainContainer() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    document.fonts.load("12px DolceVita").then(() => setIsReady(true));
  }, []);

  return (
    <div className="mainContainer__contact">
      <Header
        myMenu="myLink__menu"
        myLink="myLink__menu-link"
        myMenuLogo="myMenuLogo"
        logo={LogoWhite}
      />
      {isReady && (
        <div className="mainContainer__contact-title">
          <h1>Contact</h1>
        </div>
      )}
    </div>
  );
}

export default MainContainer;
