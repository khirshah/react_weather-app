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
  
  requestWeatherData = (location) => {
    console.log(location)
    axios({
      url: "http://localhost:3030/getWeatherData",
      method: "post",
      data: {
        city: location
      }
    }).then(
      response => {
        if (response.data) {
          this.setState({
            loaded: true,
            data: response.data
          })
        }
        else {
          alert("there is no such city in the database");
        }
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

	componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.requestWeatherData(this.props.location);
    }	
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