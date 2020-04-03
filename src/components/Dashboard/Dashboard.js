import React, { Component } from "react";
import Banner from "./Banner/Banner";
import TopCardHolder from "../Cardholder/TopCardHolder";
import Section from "./Section/Section";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Section />
        <TopCardHolder />
      </div>
    );
  }
}

export default LandingPage;
