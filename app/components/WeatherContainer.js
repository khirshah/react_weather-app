//------------------------- IMPORT --------------------------------------
import React, { Component} from "react";
import DailyWeather from "./DailyWeather";
import "./WeatherContainer.css";

//------------------- module for http request ---------------------------
const axios = require('axios');

//------------------------ COMPONENT -----------------------------------
export default class WeatherContainer extends Component {
  
  state = {
    loaded: false
  }
  
  requestWeatherData = () => {

    axios({
      url: "http://localhost:3030/getWeatherData",
      method: "post",
      data: {
        city: "Stroud"
      }
    }).then(
      response => {
        this.setState({
          loaded: true,
          data: response.data
        })
      },
      error => {
        this.setState({
          error,
          loaded: true
        })
      }
    )
  }

  createDailyWeather = () => {
    const containers = [];
    this.state.data.map((values, index) => {
      containers.push(<DailyWeather key={index} data={values}/>)
    })
    return containers;
  }

	componentDidMount() {
		this.requestWeatherData();
	}

  render() {
    if(this.state.loaded == false) return null;
    if (this.state.error) return "ERROR";
    return (
        <div className="weather-container">
          {this.createDailyWeather()} 
        </div>
      );
  }
}