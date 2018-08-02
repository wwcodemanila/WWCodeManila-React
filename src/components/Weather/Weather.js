import React, { Component } from "react";
import axios from "axios";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios
      .get("https://noah.up.edu.ph/api/four_hour_forecast")
      .then(results => console.log(results.data))
      .catch(error => console.log(error));
  }

  render() {
    return <div>weather here</div>;
  }
}

export default Weather;
