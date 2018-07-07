import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Elements/Navbar/Navbar";
import ProfileCard from "./components/ProfileCard/ProfileCard";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile-card" component={ProfileCard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
