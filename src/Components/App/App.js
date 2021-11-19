// Import styles
import "./App.scss";
// Import components
import HomePage from "../HomePage";
import AboutPage from "../AboutPage";
import ContactPage from "../ContactPage";
import ProductPage from "../Products";
import OfficeLocation from "../OfficeLocalisation";
import MentionsLegales from "../MentionsLegales";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
