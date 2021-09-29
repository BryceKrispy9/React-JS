import React, { Component } from "react";
import axios from 'axios';

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
                { title: "Github", category: "Personal", slug: 'Github' }
            ]
        };

        console.log("Portfolio container has rendered");

        this.handleFilter = this.handleFilter.bind(this); // Do this for each function that has an event
        this.getPortfolioItems = this.getPortfolioItems.bind(this);
    }

    handleFilter(filter) { // Whenever you use a clickHandler, use 'handle' in the function title
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        }); // Whenever we want to update state values, call setState
    }

    getPortfolioItems() {
        axios
          .get('https://brycepearson.devcamp.space/portfolio/portfolio_items')
          .then(response => {
        // handle success
            console.log("response data", response);
          })
          .catch(error => {
        // handle error
            console.log(error);
          });
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

        this.getPortfolioItems();

        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick = {() => this.handleFilter('eCommerce')}>eCommerce</button>
                <button onClick = {() => this.handleFilter('Custom-Websites')}>Custom Websites</button>
                <button onClick = {() => this.handleFilter('Github')}>Github</button>

                {this.portfolioItems()}
            </div>
        );
    }
}