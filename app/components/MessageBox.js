//------------------------- IMPORT --------------------------------------
import React, { Component} from "react";
//------------------------- styles ------------------------------------
import theme1 from "./messageBox1.css";
import theme2 from "./messageBox2.css";
const themes = {
  "theme1": theme1,
  "theme2": theme2
}

//------------------------ COMPONENT -----------------------------------
export default class MessageBox extends Component {
  render() {
    return(
      <div className={themes[this.props.theme]["messageBox"]}>{this.props.message}</div>
    )
  }
}