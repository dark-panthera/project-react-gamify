import React, { Component } from "react";
import Card from "../Card/Card";
import { connect } from "react-redux";
import { startGetLatestGames } from "../../../store/actions/games";

class TopCardContainer extends Component {
  componentDidMount() {
    this.props.startGetLatestGames();
  }

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
  games: state.games.currentGames
});

const mapDispatchToProps = dispatch => ({
  startGetLatestGames: () => dispatch(startGetLatestGames())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopCardContainer);
