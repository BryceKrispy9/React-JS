import React, { Component } from "react";
import axios from 'axios';

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my Portfolio!",
            isLoading: false,
            data: []
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

    getPortfolioItems() {
        axios
          .get('https://brycepearson.devcamp.space/portfolio/portfolio_items')
          .then(response => {
        // handle success
            console.log("response data", response);
            this.setState({
                data: response.data.portfolio_items
            })
          })
          .catch(error => {
        // handle error
            console.log(error);
          });
      }

    portfolioItems() {
        return this.state.data.map(item => {
            // debugger; // item, item.banner_image_url, item.name, item.description (Freezes execution of program)
            console.log("portfolio item", item);
            return <PortfolioItem key = {item.id} item = {item} />;
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }


    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick = {() => this.handleFilter('Telecommunications')}>Telecommunications</button>
                <button onClick = {() => this.handleFilter('custom-websites')}>Custom Websites</button>
                <button onClick = {() => this.handleFilter('Github')}>Github</button>

                {this.portfolioItems()}
            </div>
        );
    }
}