import React, { Component } from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import NotFoundPage from "../components/NotFoundPage";
import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/Login/Login";
import Logout from "../components/Logout/Logout";
import GameBrowser from "../components/GameBrowser/GameBrowser";

import Header from "../components/UI/Header/Header";
import SideBar from "../components/Sidebar/Sidebar";
import Backdrop from "../components/Sidebar/Backdrop/Backdrop";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

class AppRouter extends Component {
  state = {
    showBackdrop: false,
    showSidebar: false,
    redirect: ""
  };

  onHideBackdrop = () => {
    this.setState({
      showSidebar: !this.state.showSidebar,
      showBackdrop: !this.state.showBackdrop
    });
  };

  onHideSidebar = () => {
    this.setState({
      showSidebar: !this.state.showSidebar,
      showBackdrop: !this.state.showBackdrop
    });
  };

  render() {
    return (
      <Router history={history}>
        <div>
          <Header history={history} onHideSidebar={this.onHideSidebar} />
          {this.state.showSidebar ? (
            <div>
              <SideBar
                onHideBackdrop={this.onHideBackdrop}
                onHideSidebar={this.onHideSidebar}
                history={history}
              />
            </div>
          ) : null}
          {this.state.showBackdrop ? (
            <div>
              <Backdrop onHideBackdrop={this.onHideBackdrop} />
            </div>
          ) : null}
          <Switch>
            <PublicRoute path="/" component={Dashboard} exact={true} />
            <PublicRoute path="/dashboard" component={GameBrowser} />
            <PrivateRoute path="/game" component={GameBrowser} />
            <PrivateRoute path="/game:" component={GameBrowser} />
            <PublicRoute path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default AppRouter;
