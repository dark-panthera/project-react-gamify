import React from "react";
import { Link } from "react-router-dom";

const card = props => {
  let card =  "card";
  if (props.enableBorder) {
    card ="card card--think-border"
  }

  let vendor = 1;
  if (props.game.Vendor === 'Microgaming') {
    vendor = 2;
  } else if (props.game.Vendor === 'Netent') {
    vendor = 3;
  }else if (props.game.Vendor === 'BetSoft') {
    vendor = 4;
  }

  return (
    <div className={card}>
      <div className="card__title">
        <strong>{props.game.Name}</strong>
      </div>
      <div className="card__body">
        <p>
          <span className="card__body__rating">7.2</span> / <b>100</b>
        </p>
      </div>
      <div className="card__img">
        <div className="card__release-date">
          {2018}
        </div>
        <img
          src={`/images/games/${vendor}.jpg`}
          alt=""
        />
      </div>
      <div className="card__actions">
        <Link to={`movie/10`} className="button button--view">View</Link>
      </div>
    </div>
  );
};

export default card;
