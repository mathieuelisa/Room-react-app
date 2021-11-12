// Import Component
import Header from "../../HomePage/Header";
// Import fonts
import "../../../Assets/Fonts/Acens.ttf";
// Import styles
import "./styles.scss";
// Import logo
import LogoBlack from "../../../Assets/Icons/room-black.svg";

function MainContainer() {
  return (
    <div className="mainContainer__products">
      <Header
        myMenu="myLink__menu"
        myLink="myLink__menu-linkProduct"
        myMenuLogo="myMenuLogo"
        logo={LogoBlack}
      />

      <div className="mainContainer__products-title">
        <div className="mainContainer__products-productsTitle">
          <h2 className="mainProducts__title">INDOOR</h2>
        </div>
      </div>
      <div className="mainContainer__products-secondPart">
        <div className="mainContainer__products-pictures"></div>
        <div className="mainContainer__products-descriptions">
          <p className="mainContainer__products-descriptions-text">
            Specialisation: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
