import React from 'react';
import WeatherListDay from './weather_list_day';
import {parser} from '../../utils/parser';

class WeatherList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if(!this.props.weather.list) return null;
    
    //list is an array of objects
    let list = this.props.weather.list;

    //days should be populated with five subarrays: each subarray should contain objects from list
    //the objects should include 9 AM, 12, 15, 18 and 21
    let days = parser(list);

    return(
      <div className='weather-list-container'>
      {this.props.weather.city.name}, {this.props.zip}

      <div className='weather-list'>
        {
          days.map((day,id) => <WeatherListDay key={id} day={day}/>)
        }
      </div>
      </div>
    )
  }
}

export default WeatherList;
