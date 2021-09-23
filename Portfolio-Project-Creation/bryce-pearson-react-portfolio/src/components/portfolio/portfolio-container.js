import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my Portfolio!",
            data: [
                { title: "Xima Software", category: "eCommerce" },
                { title: "Eventbrite", category: "Scheduling" },
                { title: "Ministry Safe", category: "Enterprise" }
            ]
        };

        console.log("Portfolio container has rendered");

        this.handleFilter = this.handleFilter.bind(this); // Do this for each function that has an event
    }

    handleFilter(filter) { // Whenever you use a clickHandler, use 'handle' in the function title
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        }); // Whenever we want to update state values, call setState
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

                <button onClick = {() => this.handleFilter('eCommerce')}>eCommerce</button>
                <button onClick = {() => this.handleFilter('Scheduling')}>Scheduling </button>
                <button onClick = {() => this.handleFilter('Enterprise')}>Enterprise</button>

                {this.portfolioItems()}
            </div>
        );
    }
}