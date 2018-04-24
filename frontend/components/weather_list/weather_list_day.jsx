import React from 'react';
//five days, eight different times per day, 3 hour increments between each time

export default props => {
  console.log(props.day)
  return(
    <div className='weather-day'>
      <div>
        {props.day[0].dt_txt}

      </div>
      <div>
        {props.day[2].weather[0].main}
      </div>
      <div>

          {
            props.day.map((object,id) => <div key={id}>{object.main.temp}</div>)
          }


      </div>
    </div>
  )
}
