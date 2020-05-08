import React, { Component } from 'react';
import './App.css';
import TopLinks from "./components/siteLinks/siteLinks";
import SiteTitle from "./components/SiteTitle/siteTitle";
import Home from "./components/Home/Home";
import Features from "./components/Features/Features";
import Pricing from "./components/Pricing/Pricing";
import Testing from "./components/Testing/Testing";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Download from './components/Download/Download';
import Employees from "./components/employeesList";
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
          <Route path="/download">
            <Download />
          </Route>
          <Route path="/employee">
            <Employees />
          </Route>
        </Router>
      </div>
    );
  }
}
export default App;