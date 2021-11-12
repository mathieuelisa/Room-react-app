import Header from "../../HomePage/Header";
import "./styles.scss";

function MainContainer() {
  return (
    <div className="mainContainer__products">
      <Header
        myMenu="myLink__menu"
        myLink="myLink__menu-linkProduct"
        myMenuLogo="myMenuLogo"
      />

      <div className="mainContainer__products-title">
        <div className="mainContainer__products-productsTitle">
          <h2 className="mainProducts__title">INDOOR</h2>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
