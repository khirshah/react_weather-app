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
      url: "https://api.openweathermap.org/data/2.5/forecast?lat=51.744307&lon=-2.2412519&units=metric&appid=d4c1d69ed7ce962b094e9f8cc1d2af5f",
      method: "get"
    }).then(
      response => {
        console.log(response.data)
        if (response.data) {
          const first6 = response.data.list.slice(0,5)
          this.setState({
            loaded: true,
            isWeatherVisible: true,
            isMsgBoxVisible: true,
            userMessage: `Weather in ${location}`,
            data: first6,
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