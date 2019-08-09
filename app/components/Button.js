//------------------------- IMPORT --------------------------------------
import React, { Component} from "react";
//------------------------- styles ------------------------------------
import theme1 from "./button1.css";
import theme2 from "./button2.css";
const themes = {
  "theme1": theme1,
  "theme2": theme2
}

//------------------------ COMPONENT -----------------------------------
export default class Button extends Component {
  render() {
    return(
      <div className={themes[this.props.theme][this.props.name]} onClick={this.props.onClick}>{this.props.label}</div>
      )
  }
}