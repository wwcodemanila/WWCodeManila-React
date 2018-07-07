import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "components/Home/Home";
import Navbar from "components/Elements/Navbar/Navbar";
import About from "components/About/About";
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
            <Route exact path="/about" component={About} />
            <Route exact path="/profile-card" component={ProfileCard} />
            <Route exact path="/profile-form" component={ProfileForm} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
