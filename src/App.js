import React, { Component } from 'react';
import './App.css';
import TopLinks from "./components/sitelinks/sitelinks";
import SiteTitle from "./components/sitetitle/sitetitle";
import Home from "./components/home/home";
import Features from "./components/features/features";
import Pricing from "./components/pricing/pricing";
import Testing from "./components/testing/testing";
import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { Title: "Technical Education", mylist: ["google", "hotmail", "linkedIn", "stackoverflow"] }
  }
  render() {
    return (
      <div className="container">
        <Router>
          <TopLinks Title={this.state.Title} />
          <SiteTitle Title={this.state.Title} />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/features">
            <Features />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/testing">
            <Testing />
          </Route>
        </Router>
      </div>
    );
  }
}
export default App;