import React from 'react';
//five days, eight different times per day, 3 hour increments between each time

export default props => {
  
  return(
    <div>
      {props.weatherObject.main.temp}
      <div>
        {props.weatherObject.weather[0].description}
      </div>
      <div>
        {props.weatherObject.dt_txt}
      </div>
    </div>
  )
}
