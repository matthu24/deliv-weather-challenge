import React from 'react';
import WeatherListItem from './weather_list_item';
import {parser} from '../../utils/parser';
//weather[0].main: Rain, Clouds, Clear
class WeatherList extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    //fire api call here
    // this.props.fetchAllWeather();
    // console.log(this.props.weather);

  }
  render(){
    if(!this.props.weather.list) return null;
    //list is an array of objects
    //iterate through list, and for each list item, access listItem.dt_txt indices 8 and 9
    let list = this.props.weather.list;
    //days should be populated with five subarrays: each subarray should contain objects from list
    //the objects should include 9 AM, 12, 15, 18 and 21
    let days = parser(list);


    console.log(days)
    return(
      <div>
        Weather List
        {
          list.map((weatherObject,id) => <WeatherListItem key={id} weatherObject={weatherObject}/>)
        }
      </div>
    )
  }
}

export default WeatherList;
