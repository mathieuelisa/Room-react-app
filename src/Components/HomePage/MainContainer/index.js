import "./styles.scss";
// Import Icons and Img
import arrowLogo from "../../../Assets/Icons/icon-arrow.svg";
import wallpaper from "../../../Assets/Img/homepage/desktop-image-hero-1.jpg";
//Import fonts
import "../../../Assets/Fonts/RobotoThing.ttf";
import "../../../Assets/Fonts/Moonglade.ttf";
// Import components
import Header from "../Header";

function MainContainer() {
  return (
    <div className="home__first-container">
      <div className="home__first-container--firstBloc">
        <Header
          myMenu="myLink__menu"
          myLink="myLink__menu-link"
          myMenuLogo="myMenuLogo"
        />
        <img className="home__first-container--pictures" src={wallpaper} />
      </div>

      <div className="home__first-container--secondBloc">
        <h2 className="home__first-container--secondBloc-title">
          <span id="green-title">Decouvrez</span> des façons innovantes de
          décorer
        </h2>
        <p className="home__first-container--secondBloc-text">
          Ces dernières décennies, l’ameublement à su se renouveler et se
          réinventer en s’ouvrant à d’autres disciplines. C’est ainsi que des
          artistes contemporains ont été sollicités afin de collaborer avec nous
          dans le cadre de collections originales et signées.
        </p>
        <div id="placement">
          <p className="shop">
            <a id="shopnow" href="/room/shop">
              SHOP NOW
            </a>
          </p>

          <div id="arrowDiv">
            <img className="arrow" src={arrowLogo} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
