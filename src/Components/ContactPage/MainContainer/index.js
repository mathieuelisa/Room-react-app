import Header from "../../HomePage/Header";
import "./styles.scss";

function MainContainer() {
  return (
    <div className="mainContainer__contact">
      <Header
        myMenu="myLink__menu"
        myLink="myLink__menu-link"
        myMenuLogo="myMenuLogo"
      />
      <div className="mainContainer__contact-title">
        <h1>Contact</h1>
      </div>
    </div>
  );
}

export default MainContainer;
