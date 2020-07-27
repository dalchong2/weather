import React from "react";
import { Switch, Route } from "react-router-dom";
import CityList from '../CityList';

const API_WEATHER = "http://localhost:8888/weather-service/weathers?cityname=";

class Weather extends React.Component {
  state = {
    data: {
      weather: [
        {
          main: "No data",
          description: "No data"
        }
      ],
      main: {
        temp: 0
      }
    }
  };

  componentDidMount() {
      const { city } = this.state
      const { cityName } = this.props.match.params;
      const API_CITY = `${API_WEATHER}${cityName}`;
      const citiesData = fetch(API_CITY)
        .then((res) => res.json())
        .then((data)=>{
          this.setState({
            data: data
          });
        });
  }

   render() {
      const { cityName } = this.props.match.params;
      const {data } = this.state;
      
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = (data.main.temp - 273.15).toFixed(2);

      return (
          <div>
            <h3>도시이름: {cityName}</h3>
            <p>날씨 : {main}</p>
            <p>세부 날씨 : {description}</p>
            <p>온도('C) : {temp} </p>
          </div>
        );
   }
};
export default Weather;