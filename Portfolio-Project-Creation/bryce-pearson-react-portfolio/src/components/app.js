import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PortfolioContainer from './portfolio/portfolio-container';
import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import portfolioDetail from './portfolio/portfolio-detail';
import Auth from './pages/auth';
import NoMatch from "./pages/no-match";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    };

    this.handleSuccesfulLogin = this.handleSuccesfulLogin.bind(this);
    this.handleUnsuccesfulLogin = this.handleUnsuccesfulLogin.bind(this); 
  }

  handleSuccesfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }

  handleUnsuccesfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  render() {
    return (
      <div className= 'container'>
        <Router>
          <div>
          <NavigationContainer />

          <h2>{this.state.loggedInStatus}</h2>

          <Switch>
            <Route exact path = "/" component = {Home} />

            <Route 
              path = "/auth" 
              render = {props => (
                <Auth
                  {...props}
                  handleSuccesfulLogin = {this.handleSuccesfulLogin}
                  handleUnsuccesfulLogin = {this.handleUnsuccesfulLogin}
                  />
              )}
            />

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