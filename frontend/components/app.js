import React, { Component } from 'react';
import WeatherList from './weather_list/weather_list_container';
import Search from './search/search_container';

export default class App extends Component {
  render() {
    return (
      <div>
        hidfafa
        <Search/>
        <WeatherList/>
      </div>
    );
  }
}
