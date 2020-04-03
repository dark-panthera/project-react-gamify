import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="">
          <div className="header__content">
            <div className="header__left">
              <div className="header__bar" onClick={this.props.onHideSidebar}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
              <Link to="/" className="header__title">
                <h1>Gamify</h1>
              </Link>
            </div>

            <div className="header__right">
              {this.props.isAuthenticated ? (
                <Link to="/logout" className="button button--link">
                  Logout
                </Link>
              ) : (
                <Link to="/login" className="button button--link">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(Header);
