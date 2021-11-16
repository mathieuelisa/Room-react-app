import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";
import ThirdContainer from "./ThirdContainer";
import Footer from "./Footer";

import "./styles.scss";

function HomePage() {
  return (
    <div>
      <MainContainer />
      <SecondContainer />
      <ThirdContainer />
      <Footer />
    </div>
  );
}

export default HomePage;
