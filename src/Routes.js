import React from "react";
import { Switch, Route } from "react-router-dom";

// BEGIN IMPORT PAGES
import Home from "./pages/home";
import DownloadApp from "./pages/download";
// END IMPORT PAGES

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/download" component={DownloadApp} />
  </Switch>
);

export default AppRouter;
