//------------------------- IMPORT --------------------------------------
import React, { Component} from "react";
//------------------------- styles ------------------------------------
import styles from "./themesContainer.css";

//------------------------ COMPONENT -----------------------------------
export default class ThemesContainer extends Component {
  render() {
    return(
      <div className={styles.themes_container} >
      	<div className = {styles.theme_button1} onClick={this.props.buttonclick.bind(this,'theme1')}/>
      	<div className = {styles.theme_button2} onClick={this.props.buttonclick.bind(this,'theme2')} />
      </div>
      ) 
  }
}