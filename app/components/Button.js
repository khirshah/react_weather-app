//------------------------- IMPORT --------------------------------------
import React, { Component} from "react";
import "./Button.css";

//------------------------ COMPONENT -----------------------------------
export default class SearchButton extends Component {
  render() {
    return(
      <button className="search-button" onClick={this.props.onClick}>Search</button>
      )
  }
}