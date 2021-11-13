// Import Components
import Header from "../../HomePage/Header";
import Cards from "../../StylesComponents/Cards";
// Import fonts
import "../../../Assets/Fonts/Acens.ttf";
// Import styles
import "./styles.scss";
// Import logo Header
import LogoBlack from "../../../Assets/Icons/room-black.svg";
import {
  myProductsImages,
  mySecondProductsImages,
} from "../listingOfProductPage";

import CardsDescription from "../../StylesComponents/CardsDescription";

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
        {/* First part */}
        <div className="mainContainer__products-pictures">
          {myProductsImages.map((elements, index) => {
            return (
              <Cards
                key={index}
                src={elements.src}
                className="container-products-images"
                id={
                  index === 0
                    ? "firstPictures"
                    : index === 1
                    ? "secondPictures"
                    : index === 2
                    ? "thirdPictures"
                    : ""
                }
              />
            );
          })}
        </div>
        <CardsDescription textDescription="premiere description" />

        {/* Second part */}
        <div className="mainContainer__products-pictures">
          {mySecondProductsImages.map((elements, index) => {
            return (
              <Cards
                key={index}
                src={elements.src}
                className="container-products-images"
                id={
                  index === 0
                    ? "firstPictures"
                    : index === 1
                    ? "secondPictures"
                    : index === 2
                    ? "thirdPictures"
                    : ""
                }
              />
            );
          })}
        </div>
        <CardsDescription textDescription="deuxiemes descriptions" />
      </div>
    </div>
  );
}

export default MainContainer;
