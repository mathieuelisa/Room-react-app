import Header from "../../HomePage/Header";
import "./styles.scss";
import LogoBlack from "../../../Assets/Icons/room-black.svg";

function MainContainer() {
  return (
    <div className="location__first-container">
      <Header
        myMenu="myLink__menu"
        myLink="myLink__menu-linkProduct"
        myMenuLogo="myMenuLogo"
        logo={LogoBlack}
      />
    </div>
  );
}

export default MainContainer;
