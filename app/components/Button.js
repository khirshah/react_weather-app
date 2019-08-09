//------------------------- IMPORT --------------------------------------
import React, { Component} from "react";
//------------------------- styles ------------------------------------
import style1 from "./button1.css";
import style2 from "./button2.css";

//------------------------ COMPONENT -----------------------------------
export default class Button extends Component {
  render() {
    return(
      <button className={style1[this.props.name]} onClick={this.props.onClick}>{this.props.label}</button>
      )
  }
}