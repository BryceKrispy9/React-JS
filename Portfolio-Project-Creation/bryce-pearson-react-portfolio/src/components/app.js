import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PortfolioContainer from './portfolio/portfolio-container';
import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import portfolioDetail from './portfolio/portfolio-detail';
import NoMatch from "./pages/no-match";

export default class App extends Component {
  render() {
    return (
      <div className='app'>

        <Router>
          <div>
          <NavigationContainer />

          <Switch>
            <Route exact path = "/" component = {Home} />
            <Route path = "/about-me" component = {About} />
            <Route path = "/contact" component = {Contact} />
            <Route path = "/blog" component = {Blog} />
            <Route path = "/portfolio/:slug" component = {portfolioDetail} />
            <Route component = {NoMatch} />
          </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

// window.alert("Today's date and time are " + moment().format('MMMM Do YYYY, h:mm:ss a'));