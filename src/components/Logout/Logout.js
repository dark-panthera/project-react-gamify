import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../../store/actions/auth";

class Logout extends Component {
    componentWillMount() {
        this.props.startLogout();
    }
   
    render() {

      return (
        <div className="header">
            <Redirect to="/" />
        </div>
      );
    }
  }
const mapDispatchToProps = dispatch => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Logout);
