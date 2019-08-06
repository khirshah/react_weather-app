//------------------------- IMPORT --------------------------------------
import React, { Component} from "react";
import "./DailyWeather.css";

//------------------------ COMPONENT -----------------------------------
export default class DailyWeather extends Component {

  render() {
    console.log("PROPS", this.props.data)
    return(
      <div>
        <img src={require(`../img/${this.props.data.icon}.png`)}/>
        <div className="daily-weather">{`${this.props.data.min}° ${this.props.data.max}°`}</div>
      </div>

      )
  }
}