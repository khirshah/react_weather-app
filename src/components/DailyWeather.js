//------------------------- IMPORT --------------------------------------
import React, { Component} from "react";
import styles from "./dailyWeather.css";

//------------------- days array ---------------------------------------
const days = ["Sun", "Mon","Tue", "Wed", "Thu", "Fri", "Sat"];

//------------------------ COMPONENT -----------------------------------
export default class DailyWeather extends Component {


  render() {
    return(
      <div className={styles.daily_weather}>
      	<div className={styles.label}>{days[new Date(this.props.data.date*1000).getDay()]}</div>
        <img className={styles.weather_image} src={`/src/img/${this.props.data.weather[0].icon}.png`}/>
        <div className="temperature">{`${this.props.data.main.temp_min}° ${this.props.data.main.temp_max}°`}</div>
      </div>
      )
  }
}