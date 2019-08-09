//------------------------- IMPORT --------------------------------------
import React, { Component} from "react";
import "./messageBox.css";

//------------------------ COMPONENT -----------------------------------
export default class MessageBox extends Component {
  render() {
    return(
      <div>{this.props.message}</div>
    )
  }
}