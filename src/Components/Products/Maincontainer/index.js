// Import Components
import Header from "../../HomePage/Header";
import Cards from "../../StylesComponents/Cards";
import CardsDescription from "../../StylesComponents/CardsDescription";
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
// Import react reveal
import Fade from "react-reveal/Fade";
import { useEffect, useState } from "react";

function MainContainer() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    document.fonts.load("12px Acens").then(() => setIsReady(true));
  }, []);

  return (
    <div className="mainContainer__products">
      <Header
        myMenu="myLink__menu"
        myLink="myLink__menu-linkProduct"
        myMenuLogo="myMenuLogo"
        logo={LogoBlack}
      />

      <div className="mainContainer__products-title">
        {isReady && (
          <div className="mainContainer__products-productsTitle">
            <h2 className="mainProducts__title">INDOOR</h2>
          </div>
        )}
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
        <Fade delay={2000} duration={2000}>
          <CardsDescription
            textDescription="Le design industriel est tendance, et les chaises Mindi l???incarnent ?? merveille.
          Vendues par paire, elles combinent un si??ge en bois d'olivier et des pieds en m??tal thermolaqu?? pour un style r??ellement saisissant. 
          Avec leur assise incurv??e et enveloppantes, elles sont parfaites pour les longues conversations d???apr??s d??ner."
          />
        </Fade>

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
        <Fade delay={500} duration={2000}>
          <CardsDescription
            textDescription="Youvu s???inspire des cr??ations artisanales. 
          Avec leur forme incurv??e et leurs subtiles finitions ouvrag??es, 
          ces chaises transformeront votre salle ?? manger en v??ritable atelier d???artiste, 
          avec un joli twist scandinave."
          />
        </Fade>
      </div>
    </div>
  );
}

export default MainContainer;
