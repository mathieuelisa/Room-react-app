import "./styles.scss";
// Import fonts
import "../../../Assets/Fonts/Resotho-Extralight.otf";
import Avatar from "../../StylesComponents/Avatar";
// Impors pictures
import firstPics from "../../../Assets/Img/aboutpage/profil1.jpg";
import secondPics from "../../../Assets/Img/aboutpage/profil2.jpg";
// Import react reveal
import Fade from "react-reveal/Fade";

function SecondContainer() {
  return (
    <div className="text-bloc">
      <div className="container-card">
        {/* Avatars 1 */}
        <Avatar
          job="Manager"
          name="Yasmina Gonzalez"
          description="Yasmina is a qualified industrial and interior designer with over a decade of experience.
              She holds a passion for innovating with material and form and introduces traditional crafting 
              techniques from artisans across the world into her work."
          image={firstPics}
          classNameWork="title-work"
        />

        {/* Avatars 2 */}
        <Avatar
          job="Designer"
          name="Arsene Durand"
          description="Arsene designs precision, handcrafted furniture pieces, 
              having built a career on combining a mechanical engineering with his flair for artistic creativity."
          image={secondPics}
          classNameWork="title-work2"
        />
      </div>
      <div className="container-bloc2">
        <Fade bottom duration={2000}>
          <div className="title-bloc2">
            <h2>DESIGN_</h2>
          </div>
        </Fade>

        <Fade bottom duration={2000} delay={500}>
          <div className="text_bloc2">
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. <br />
              <br /> Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
              <br /> Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default SecondContainer;
