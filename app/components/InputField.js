//------------------------- IMPORT --------------------------------------
import React, { Component} from "react";
import "./InputField.css";

//------------------------ COMPONENT -----------------------------------
export default class InputField extends Component {
  render() {
    return(
      <input className="input-field" placeholder="Type a city name to search" onChange={this.props.onChange}/>
    )
  }
}