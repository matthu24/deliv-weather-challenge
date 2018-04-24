import {combineReducers} from 'redux';
import WeatherReducer from './weather_reducer';

export default combineReducers({
  weather: WeatherReducer
})
