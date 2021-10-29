import "./App.scss";
import HomePage from "../HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutPage from "../AboutPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/about" exact>
            <AboutPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
