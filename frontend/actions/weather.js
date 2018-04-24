import {fetchWeather} from '../utils/weather';

export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';

const receiveWeather = (weather) => ({
  type: RECEIVE_WEATHER,
  weather
})

export const fetchAllWeather = (zip) => dispatch => {
  fetchWeather(zip)
    .then(result => result.json())
    .then(weather => dispatch(receiveWeather(weather)))
}
