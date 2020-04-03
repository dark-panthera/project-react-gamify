import React, { Component } from "react";
import Card from "./Card/Card";
import { connect } from "react-redux";
import selectGames from "../../store/selectors/games";

class CardHolder extends Component {
  render() {
    let games = this.props.games.map((game, index) => {
      return <Card game={game} key={index} />;
    });

    if (games.length === 0) {
      games = <h4 className="label">No Matching games could be found!</h4>;
    }

    return <div className="cardholder">{games}</div>;
  }
}

const mapStateToProps = (state, props) => ({
  games: selectGames(state.games.currentGames, state.games, state.vendor)
});

export default connect(mapStateToProps, undefined)(CardHolder);
