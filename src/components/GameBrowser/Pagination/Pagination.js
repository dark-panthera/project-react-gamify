import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setPrevious,
  setNext
} from "../../../store/actions/games";

class Pagination extends Component {
  onPrevousClick = () => {
    this.props.setPrevious();
  };
  onNextClick = () => {
    this.props.setNext();
  };
  render() {
    return (
      <header className="header">
        <div className="content-container">
          <div className="header__content">
            <button
              className="button button--link"
              onClick={this.onPrevousClick}
              disabled={this.props.disablePrevious}
            >
              Previous
            </button>
            <button
              className="button button--link"
              onClick={this.onNextClick}
              disabled={this.props.disableNext}
            >
              Next
            </button>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state, props) => ({
  disableNext: state.games.disableNext,
  disablePrevious: state.games.disablePrevious
});

const mapDispatchToProps = dispatch => ({
  setPrevious: () => dispatch(setPrevious()),
  setNext: () => dispatch(setNext())
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
