import "./styles.scss";
// Import fonts
import "../../../Assets/Fonts/Resotho-Extralight.otf";
import Avatar from "../../StylesComponents/Avatar";

import firstPics from "../../../Assets/Img/aboutpage/profil1.jpg";

function SecondContainer() {
  return (
    <div className="text-bloc">
      <div className="container-card">
        <Avatar
          job="Manager"
          name="Yasmina Gonzalez"
          description="Yasmina is a qualified industrial and interior designer with over a decade of experience.
              She holds a passion for innovating with material and form and introduces traditional crafting 
              techniques from artisans across the world into her work."
          image={firstPics}
        />
      </div>

      <div className="container-bloc2">
        <div className="title-bloc2">
          <h2>DESIGN_</h2>
        </div>

        <div className="text_bloc2">
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. <br />
            <br /> Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
            <br /> Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SecondContainer;
