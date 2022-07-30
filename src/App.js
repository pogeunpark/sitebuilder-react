import { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";

import OffCanvas from "./Components/OffCanvas";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Layout from "./Components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Fragment>
      <OffCanvas />
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Layout>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Layout>
      </Switch>
    </Fragment>
  );
};

export default App;
