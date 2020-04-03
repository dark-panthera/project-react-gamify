import React, { Component } from "react";
import Banner from './Banner/Banner';
import Section from './Section/Section';
import TopCardHolder from '../Cardholder/TopCardHolder';

class LandingPage extends Component {

    render() {
        return (
            <div>
                <Banner />
                <Section />
                <TopCardHolder/>
            </div>
        )
    }
}

export default LandingPage;