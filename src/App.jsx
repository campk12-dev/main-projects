import React from "react";
import Heading from "./Heading";
import Banner from "./Banner";
import Menu from "./Menu";
import Issues from "./Issues";
import CardR from "./CardR";
import Footer from "./Footer";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import Greeting from "./Greeting";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Heading />
      <Banner url={location.pathname} />
      <Switch>
        <Route exact path="/" component={() => <Menu tech="home" />} />
        <Route path="/issues" component={() => <Issues tech="issues" />} />
        <Route path="/:tech" component={() => <CardR tech="home" />} />
        <Redirect to="/" />
      </Switch>
      <Greeting />
      <Footer />
    </>
  );
};

export default App;
