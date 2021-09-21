import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my Portfolio!",
            data: [
                { title: "Xima Software" },
                { title: "Eventbrite" },
                { title: "Ministry Safe" }
            ]
        };

        console.log("Portfolio container has rendered");
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} />;
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.portfolioItems()}
            </div>
        );
    }
}