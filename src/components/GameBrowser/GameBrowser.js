import React, { Component } from "react";
import TopCardContainer from "../CardContainer/TopCardContainer/TopCardContainer";
import Pagination from "../GameBrowser/Pagination/Pagination";
import Filter from "./Filter/Filter";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Filter />
        <TopCardContainer />
        <Pagination />
      </div>
    );
  }
}

export default LandingPage;
