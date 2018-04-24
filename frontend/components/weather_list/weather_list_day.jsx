import React from 'react';
import WeatherTemp from './weather_temp_item';
//five days, eight different times per day, 3 hour increments between each time

export default props => {
  console.log(props.day)
  //we might have some empty objects in the day array 
  let firstDay;
  for(let i=0;i<props.day.length;i++){
    if(props.day[i].dt){
      firstDay= props.day[i];
      break;
    }
  }
  let imageFile;
    if(firstDay.weather[0].main === 'Rain'){
      imageFile = 'https://s3.us-east-2.amazonaws.com/thelocallist/Rain.png'
    } else if(firstDay.weather[0].main === 'Clouds'){
      imageFile = 'https://s3.us-east-2.amazonaws.com/thelocallist/Clouds.png'
    }  else if(firstDay.weather[0].main === 'Clear'){
      imageFile = 'https://s3.us-east-2.amazonaws.com/thelocallist/Clear.png'
    }
  return(
    <div className='weather-day'>
      <img className='weather-icon' src={imageFile} />
      <div>
        {firstDay.dt_txt}

      </div>
      <div>
        {firstDay.weather[0].description}
      </div>
      <div>
        {Math.floor(parseInt(props.day[props.day.length-2].high))}° {Math.floor(parseInt(props.day[props.day.length-1].low))}°
      </div>
      <div className='temp-list'>

          {
            props.day.slice(0,props.day.length-2).map((object,id) => <WeatherTemp object={object} key={id}/> )
          }


      </div>
    </div>
  )
}
