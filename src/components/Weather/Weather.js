import React, { Component } from "react";
import axios from "axios";

import PageContent from "components/Elements/PageContent";
import Table from "components/Weather/Table";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: []
    };
  }

  componentWillMount() {
    axios
      .get(
        "https://us-central1-terminus-161218.cloudfunctions.net/noah/four_hour_forecast"
      )
      .then(response => {
        this.setState({
          weatherData: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const headers = ["Location", "Longitude", "Latitude", "Hourly Forecast"];
    return this.state.weatherData.length === 0 ? (
      <h3 className="subtitle has-text-centered">Loading data...</h3>
    ) : (
      <PageContent
        title="Weather Forecast"
        description="Data taken from NOAH 4 Hour Forecast"
      >
        <Table headers={headers} data={this.state.weatherData} />
      </PageContent>
    );
  }
}

export default Weather;
