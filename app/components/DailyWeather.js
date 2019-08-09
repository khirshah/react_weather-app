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
        <img className={styles.weather_image} src={require(`../img/${this.props.data.icon}.png`)}/>
        <div className="temperature">{`${this.props.data.min}° ${this.props.data.max}°`}</div>
      </div>

      )
  }
}