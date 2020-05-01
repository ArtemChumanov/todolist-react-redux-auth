import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "../routes/auth-routes";
import { Router } from "react-router";
import { history } from "../routes/history";
import HomePage from "../pages/homePage";
import Registration from "../containers/registration/Registration";
import Auth from "../pages/authPage";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route path="/login" component={Auth} />
            <Route path="/registration" component={Registration} />
          </div>
        </Router>
      </div>
    );
  }
}
