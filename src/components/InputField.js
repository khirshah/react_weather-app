//------------------------- IMPORT --------------------------------------
import React, { Component} from "react";
import styles from "./inputField.css";

//------------------------ COMPONENT -----------------------------------
export default class InputField extends Component {
  render() {
    return(
      <input className={styles.input_field} placeholder="Type a city name to search" onChange={this.props.onChange}/>
    )
  }
}