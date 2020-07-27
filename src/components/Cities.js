import React from 'react';
import {Switch, Route, withRouter} from "react-router"
import CityList from './CityList';
import Weather from './Weather/index'


const API_CITIES = 'http://localhost:8888/weather-service/available-cities';
//const API_CITIES = "http://riotkr.mockable.io/weather-crawlers/cities"
const API_WEATHER ='http://localhost:8888/weather-service/weathers';

class Cities extends React.Component {
  
  state = {
    cities: []
  }
  
  async componentDidMount() {

    console.log('City component');
    const {cityId} = this.props.match.params;
    const api = `${API_WEATHER}?cityname=${cityId}`;

    const{cities} = this.state;
    console.log(api);
    
    const citiesData = await fetch(API_CITIES)
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        cities: data,
      });
    });
    
  }
  
  render() {
    const {cities} =this.state;
    const { match } = this.props;
  
    return (
      <div>
        <h1>Cities</h1>
        <p>City list</p>

        <Switch>
          <Route
            exact
            path={match.path}
            render={() => <CityList cities={cities} />}
          />
          <Route path={`${match.path}/:cityName`} component={Weather} />
        </Switch>
      </div>
    );
  }
}
export default withRouter(Cities);