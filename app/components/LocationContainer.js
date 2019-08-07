//------------------------- IMPORT --------------------------------------
import React, { Component} from "react";
import "./InputField.css";
import SearchButton from "./Button";
import InputField from "./InputField";

//------------------------ COMPONENT -----------------------------------
export default class LocationContainer extends Component {
	state = {location: "" };

  handleChange = (event) => {
    if (event && event.target && event.target.value) {
      this.setState({location: event.target.value});
    }
  }

  render() {
    return(
      <div className="location-container">
      	<InputField onChange={this.handleChange}/>
      	<SearchButton onClick={this.props.buttonclick.bind(this,this.state.location)}/>
      </div>
      )
  }
}