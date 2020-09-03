import React, { Component } from 'react';
import './App.css';
import LineGraph from "./line-graph/LineGraph";



class App extends Component {
  render() {
      return (
        <div className="center margin-bottom-medium">
          <h1 id="mainTitle">Stats from MyFitnessPal, Withings Smart Watch and Scales</h1>
          <LineGraph 
            svgProps={
              { 
                width: 500, 
                height: 300,
                id:"svg-line-calories"
              }
            }
            title="Calories" />  
            <LineGraph 
            svgProps={
              { 
                width: 500, 
                height: 300,
                id:"svg-line-macros"
              }
            }
            title="Macros" />
            <LineGraph 
            svgProps={
              { 
                width: 500, 
                height: 300,
                id:"svg-line-micros"
              }
            }
            title="Micros" />  
        </div>
    );
  }
}

export default App;
