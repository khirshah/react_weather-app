import React, { Component} from "react";
import "./App.css";
import WeatherContainer from "./components/WeatherContainer";

class App extends Component {
  render(){
    return(
      <div className="App">
        <h1> Weather in Stroud: </h1>
        <WeatherContainer/>
      </div>
    );
  }
}

export default App;