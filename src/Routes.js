import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import DownloadApp from "./pages/download";

const AppRouter = () => (
  <Switch>
    <Route exact path="/anifoxpage" component={Home} />
    <Route path="/anifoxpage/download" component={DownloadApp} />
  </Switch>
);

export default AppRouter;
