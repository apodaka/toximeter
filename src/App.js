import React from "react";
import MainPage from "./containers/MainPage";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1>Medidor de toxicidad</h1>
      <Router>
        <Switch>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
