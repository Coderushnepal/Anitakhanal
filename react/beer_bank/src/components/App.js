import React from "react";
import BeerInfiniteList from "./views/BeerInfiniteList";

import Beer from "./views/Beer";
import Favourite from "./views/Favourite";
import * as routes from "../constants/routes";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path = { routes.BEERS} component = { BeerInfiniteList} />
       <Route exact path = { routes.BEER} component = { Beer } />
       <Route exact path = { routes.FAVOURITE} component = { Favourite} />
     <Redirect to = { routes.BEERS } />
      
    </Switch>
    </BrowserRouter>
   
  );
}

export default App;
