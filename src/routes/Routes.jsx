import React from "react";
import { Route, Redirect } from "react-router-dom";

import Callback from "../pages/Callback";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Auth from "../Auth/Auth";
import Nav from "../components/Nav";
import Public from "../pages/Public";
import Private from "../pages/Private";

const Routes = props => {
  const auth = new Auth(props.history);
  return (
    <>
      <Nav auth={auth} />
      <div className="body">
        <Route
          path="/"
          exact
          render={props => <Home auth={auth} {...props} />}
        />
        <Route
          path="/callback"
          render={props => <Callback auth={auth} {...props} />}
        />
        <Route
          path="/profile"
          render={props =>
            auth.isAuthenticated() ? (
              <Profile auth={auth} {...props} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route path="/public" component={Public} />
        <Route
          path="/private"
          render={props =>
            auth.isAuthenticated() ? (
              <Private auth={auth} {...props} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
      </div>
    </>
  );
};

export default Routes;
