import React from "react";
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from "react-router";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Book from "./components/Book";
import Wishlist from "./components/Wishlist";

class Routes extends React.Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Nav}>
          <IndexRoute component={Home} />
          <Route path="wishlist" component={Wishlist} />
          <Route path="details/:id">
              <IndexRoute component={Book} />
          </Route>
        </Route>
      </Router>
    );
  }
}

export default Routes;
