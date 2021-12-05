// Import styles
import "./App.scss";
// Import components
import HomePage from "../HomePage";
import AboutPage from "../AboutPage";
import ContactPage from "../ContactPage";
import ProductPage from "../Products";
import OfficeLocation from "../OfficeLocalisation";
import MentionsLegales from "../MentionsLegales";
// Import React Router
import { BrowserRouter, Route, Switch } from "react-router-dom";
// React Hooks
import { useEffect } from "react";
import ScrollToTop from "../Config/ScrollToTheTop";

function App() {
  useEffect(() => {
    document.title = "ROOM | Find your happiness with our website";
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/products" exact>
            <ProductPage />
          </Route>

          <Route path="/about" exact>
            <AboutPage />
          </Route>

          <Route path="/mentionsLegales" exact>
            <MentionsLegales />
          </Route>

          <Route path="/contact" exact>
            <ContactPage />
          </Route>

          <Route path="/location" exact>
            <OfficeLocation />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
