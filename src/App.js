import React from "react";
import "./CSS/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/React/home";
import Nav from "./Components/React/navbar";
import About from "./Components/React/aboutApp.js";
import Contact from "./Components/React/contact.js";
import CountryDetail from "./Components/React/countryDetails";
import HamburgerMenu from "./Components/React/hamburgerMenu";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <HamburgerMenu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/countries/:name" component={CountryDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
