// Import Components
import Header from "../../HomePage/Header";
// Import styles
import "./styles.scss";
// Import Fonts
import "../../../Assets/Fonts/Dolce Vita.ttf";
// Import react reveal
import Fade from "react-reveal/Fade";

function MainContainer() {
  return (
    <div className="mainBloc">
      <Header
        myMenu="myLink__menu"
        myLink="myLink__menu-link"
        myMenuLogo="myMenuLogo"
      />
      <div className="mainBloc-citation">
        <Fade top duration={2000}>
          <h2 className="mainBloc-citation-title">
            J’aime explorer des domaines qui me font peur. Lorsque j’ai peur, je
            sais que je vais dans la bonne direction...
          </h2>
        </Fade>

        <Fade delay={1500}>
          <p className="final-picture-bloc-citation--name">Mathieu Elisa</p>
        </Fade>
      </div>
    </div>
  );
}

export default MainContainer;
