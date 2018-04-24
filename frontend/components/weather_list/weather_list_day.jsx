import React from 'react';
//five days, eight different times per day, 3 hour increments between each time

export default props => {
  console.log(props.day)
  let imageFile;
    if(props.day[2].weather[0].main === 'Rain'){
      imageFile = 'https://s3.us-east-2.amazonaws.com/thelocallist/Rain.png'
    } else if(props.day[2].weather[0].main === 'Clouds'){
      imageFile = 'https://s3.us-east-2.amazonaws.com/thelocallist/Clouds.png'
    }  else if(props.day[2].weather[0].main === 'Clear'){
      imageFile = 'https://s3.us-east-2.amazonaws.com/thelocallist/Clear.png'
    }
  return(
    <div className='weather-day'>
      <img className='weather-icon' src={imageFile} />
      <div>
        {props.day[0].dt_txt}

      </div>
      <div>
        {props.day[2].weather[0].description}
      </div>
      <div>
        {props.day[props.day.length-2].high} {props.day[props.day.length-1].low}
      </div>
      <div className='temp-list'>

          {
            props.day.slice(0,5).map((object,id) => <div key={id}>{object.main.temp}</div>)
          }


      </div>
    </div>
  )
}
