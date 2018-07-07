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
import Home from "components/Home/Home";
import Navbar from "components/Elements/Navbar/Navbar";
import ProfileCard from "components/Profile/ProfileCard";
import ProfileForm from "components/Profile/ProfileForm";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile-card" component={ProfileCard} />
            <Route exact path="/profile-form" component={ProfileForm} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
