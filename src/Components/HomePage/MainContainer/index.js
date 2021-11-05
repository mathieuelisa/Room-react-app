import "./styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import Icons and Img
import arrowLogo from "../../../Assets/Icons/icon-arrow.svg";
//Import fonts
import "../../../Assets/Fonts/RobotoThing.ttf";
import "../../../Assets/Fonts/Moonglade.ttf";
import "../../../Assets/Fonts/Hijrnotes.ttf";
// Import components
import Header from "../Header";
import images from "../myImage";
// Import component React slick Carroussel
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 6000,
};

function MainContainer() {
  return (
    <div className="home__first-container">
      <div className="home__first-container--firstBloc">
        <Header
          myMenu="myLink__menu"
          myLink="myLink__menu-link"
          myMenuLogo="myMenuLogo"
        />

        <div className="pipo">
          {/* React slick carrousel */}
          <Slider {...settings}>
            {images.map(({ id, src, title, description }) => (
              <img
                className="home__first-container--pictures"
                key={id}
                src={src}
                title={title}
                alt={description}
              />
            ))}
          </Slider>
        </div>
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
