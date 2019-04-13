/*
 * This component houses the routes of our app
 * Routes determine the component to show when a url is visited
 *
 * Activity:
 * Create an additional route that leads to another component.
 *
 * When your done, create a branch on our repository and push your code. :)
 *
 * Reference: https://reacttraining.com/react-router/core/guides/philosophy
 */
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Home/components/Home";
import Navbar from "./Elements/components/Navbar/Navbar";
import About from "./About/components/About";
import ProfileCard from "./Profile/components/ProfileCard";
import ProfileForm from "./Profile/components/ProfileForm";
import Weather from "./Weather/components/Weather";
import Products from "./Products/components/Products.jsx";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/profile-card" component={ProfileCard} />
            <Route exact path="/profile-form" component={ProfileForm} />
            <Route exact path="/weather" component={Weather} />
            <Route exact path="/products" component={Products} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
