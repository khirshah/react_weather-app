//------------------------- IMPORT --------------------------------------
import React, { Component} from "react";
import "./dailyWeather.css";

//------------------- days array ---------------------------------------
const days = ["Sun", "Mon","Tue", "Wed", "Thu", "Fri", "Sat"];

//------------------------ COMPONENT -----------------------------------
export default class DailyWeather extends Component {

  render() {
    return(
      <div className="daily-weather">
      	<div className="label">{days[new Date(this.props.data.date*1000).getDay()]}</div>
        <img src={require(`../img/${this.props.data.icon}.png`)}/>
        <div className="temperature">{`${this.props.data.min}° ${this.props.data.max}°`}</div>
      </div>

      )
  }
}