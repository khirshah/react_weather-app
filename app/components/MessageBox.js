//------------------------- IMPORT --------------------------------------
import React, { Component} from "react";
import "./MessageBox.css";

//------------------------ COMPONENT -----------------------------------
export default class MessageBox extends Component {
  render() {
    return(
      <div>{this.props.message}</div>
    )
  }
}