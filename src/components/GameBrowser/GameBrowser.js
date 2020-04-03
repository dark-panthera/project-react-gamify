import React, { Component } from "react";
import Cardholder from '../Cardholder/Cardholder';
import Pagination from "../GameBrowser/Pagination/Pagination";
import Filter from "./Filter/Filter";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Filter />
        <Cardholder />
        <Pagination />
      </div>
    );
  }
}

export default LandingPage;
