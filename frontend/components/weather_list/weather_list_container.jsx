import React from 'react';
import {connect} from 'react-redux';
import WeatherList from './weather_list';
import {fetchAllWeather} from '../../actions/weather';

const mapStateToProps = state => ({
  weather: state.weather
})

const mapDispatchToProps = dispatch => ({
  fetchAllWeather: () => dispatch(fetchAllWeather())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherList)
