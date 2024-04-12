//------------------------- IMPORT --------------------------------------
import React, { Component} from "react";
//-------------------- child components -------------------------------
import WeatherContainer from "./components/WeatherContainer";
import LocationContainer from "./components/LocationContainer";
import ThemesContainer from "./components/ThemesContainer";

//------------------------- styles ------------------------------------
import styles from "./app.css";
import theme1 from "./app_theme1.css";
import theme2 from "./app_theme2.css";
const themes = {
  "theme1": theme1,
  "theme2": theme2
}

//------------------------ COMPONENT -----------------------------------
class App extends Component {
  state = {
  location: "",
  themeName: "theme1",
  theme: theme1
  }

  handleLocationChange = (location) => {
    this.setState({location: location});
  }

  handleColorChange = (themenum) => {
    this.setState({
      themeName: themenum,
      theme: themes[themenum]
    });
  }

  render(){
    return(
      <div className={[styles.app,this.state.theme.app].join(' ')}>
        <div className={styles.appContainer}>
          <div className={styles.appTitle}>Weather app</div>
          <LocationContainer theme={this.state.themeName} buttonclick={this.handleLocationChange}/>
          <WeatherContainer theme={this.state.themeName} location={this.state.location}/>
          <ThemesContainer buttonclick={this.handleColorChange}/>
        </div>
      </div>
    );
  }
}

//------------------------- EXPORT --------------------------------------
export default App;