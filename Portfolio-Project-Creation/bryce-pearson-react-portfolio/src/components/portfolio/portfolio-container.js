import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my Portfolio!",
            isLoading: false,
            data: [
                { title: "Xima Software", category: "eCommerce", slug: 'xima-software' },
                { title: "Pearson Remodeling", category: "Custom Websites", slug: 'pearson-remodeling' },
                { title: "Ministry Safe", category: "Enterprise", slug: 'ministry-safe' }
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
            return <PortfolioItem title={item.title} url={"google.com"} slug = {item.slug} />;
        });
    }


    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick = {() => this.handleFilter('eCommerce')}>eCommerce</button>
                <button onClick = {() => this.handleFilter('Custom-Websites')}>Custom Websites</button>
                <button onClick = {() => this.handleFilter('Enterprise')}>Enterprise</button>

                {this.portfolioItems()}
            </div>
        );
    }
}