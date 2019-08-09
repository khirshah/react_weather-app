//------------------------- IMPORT --------------------------------------
import React, { Component} from "react";
//-------------------- child components -------------------------------
import WeatherContainer from "./components/WeatherContainer";
import LocationContainer from "./components/LocationContainer";
import ThemesContainer from "./components/ThemesContainer";

//------------------------- styles ------------------------------------
import style from "./app.css";
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
  theme: theme1
  }

  handleLocationChange = (location) => {
    this.setState({location: location});
  }

  handleColorChange = (themenum) => {
    this.setState({theme: themes[themenum]});
  }

  render(){
    return(
      <div className={[style.app,this.state.theme.app].join(' ')}>
        <div> Weather app </div>
        <LocationContainer buttonclick={this.handleLocationChange}/>
        <WeatherContainer location={this.state.location}/>
        <ThemesContainer buttonclick={this.handleColorChange}/>
      </div>
    );
  }
}

//------------------------- EXPORT --------------------------------------
export default App;