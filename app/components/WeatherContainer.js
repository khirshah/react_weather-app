//------------------------- IMPORT --------------------------------------
import React, { Component} from "react";
import DailyWeather from "./DailyWeather";
import styles from "./weatherContainer.css";
import MessageBox from "./MessageBox";

//------------------- module for http request ---------------------------
const axios = require('axios');

//------------------------ COMPONENT -----------------------------------
export default class WeatherContainer extends Component {
  
  state = {
    loaded: false,
    isMsgBoxVisible: false,
    userMessage: "",
    isWeatherVisible: false
  }
  
  requestWeatherData = (location) => {
    axios({
      url: process.env.URL || "https://agi-weather-server.herokuapp.com/getWeatherData",
      method: "post",
      data: {
        city: location
      }
    }).then(
      response => {
        if (response.data) {
          this.setState({
            loaded: true,
            isWeatherVisible: true,
            isMsgBoxVisible: true,
            userMessage: `Weather in ${location}`,
            data: response.data,
          })
        }
        else {
          this.setState({
            loaded: true,
            isWeatherVisible: false,
            isMsgBoxVisible: true,
            userMessage: "There is no such city in the database"
            }
          )};
      },
      error => {
        this.setState({
          loaded: true,
          isWeatherVisible: false,
          isMsgBoxVisible: true,
          userMessage: 'ERROR'
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
    return (
      <div className={styles.weather_container}>
        {this.state.isMsgBoxVisible && <MessageBox theme={this.props.theme} message={this.state.userMessage}/>}
        {this.state.isWeatherVisible && <div className={styles.weather_items_container}>
          {this.createDailyWeather()} 
        </div>}
      </div>
      );
  }
}