import "./styles.scss";
// Import Icons and Img
import arrowLogo from "../../../Assets/Icons/icon-arrow.svg";
//Import fonts
import "../../../Assets/Fonts/RobotoThing.ttf";
import "../../../Assets/Fonts/Moonglade.ttf";
import "../../../Assets/Fonts/Hijrnotes.ttf";
// Import components
import Header from "../Header";
import images from "../myImage";
// Import components React slick Carroussel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import components react router
import { Link } from "react-router-dom";
// Import react reveal
import Fade from "react-reveal/Fade";
// Import logo
import LogoWhite from "../../../Assets/Icons/room-white.svg";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 6000,
  arrows: false,
};

function MainContainer() {
  return (
    <div className="home__first-container">
      <div className="home__first-container--firstBloc">
        <Header
          myMenu="myLink__menu"
          myLink="myLink__menu-link"
          myMenuLogo="myMenuLogo"
          logo={LogoWhite}
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
        <Fade right duration={2000}>
          <h2 className="home__first-container--secondBloc-title">
            <span id="green-title">Decouvrez</span> des façons innovantes de
            décorer
          </h2>
        </Fade>
        <p className="home__first-container--secondBloc-text">
          Ces dernières décennies, l’ameublement à su se renouveler et se
          réinventer en s’ouvrant à d’autres disciplines. C’est ainsi que des
          artistes contemporains ont été sollicités afin de collaborer avec nous
          dans le cadre de collections originales et signées.
        </p>

        <div id="placement">
          <p className="shop">
            <Link id="shopnow" to="/products">
              PRODUCTS
            </Link>
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
