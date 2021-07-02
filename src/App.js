import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import PortfolioProject from "./components/PortfolioProject";
import Portfolio from "./components/Portfolio";
import Shop from "./components/Shop";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={PortfolioProject} path="/portfolio/:slug" />
        <Route component={Portfolio} path="/portfolio" />
        <Route component={Shop} path="/shop"/>
        <Route component={Cart} path="/cart"/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
