import React, { Component} from "react";
import "./App.css";
import WeatherContainer from "./components/WeatherContainer";
import LocationContainer from "./components/LocationContainer";

class App extends Component {
	state = {location: ""}

  handleChange = (location) => {
    this.setState({location: location});
  }

  render(){
    return(
      <div className="App">
        <h1> Type a city name to search: </h1>
        <LocationContainer buttonclick={this.handleChange}/>
        <WeatherContainer location={this.state.location}/>
      </div>
    );
  }
}

export default App;