export const parser = data => {
  //iterate through data, and for each list item, access listItem.dt_txt indices 8 and 9
  // 9 AM, 12, 15, 18 and 21
  let days = [];
  let currentDate = data[0].dt_txt.slice(8,10);//should be '24'
  let currentDayArray = [];
  let lowTemp = data[0].main.temp;
  let highTemp = data[0].main.temp;
  data.forEach(object => {
    if(object.main.temp < lowTemp){
      lowTemp = object.main.temp;
    }else if(object.main.temp > highTemp){
      highTemp = object.main.temp;
    }
    if(parseInt(object.dt_txt.slice(11,13)) < 22 && parseInt(object.dt_txt.slice(11,13)) > 8 ){
      currentDayArray.push(object);
    }
    //new day
    if(object.dt_txt.slice(8,10) !== currentDate){
      while(currentDayArray.length !== 5){
        currentDayArray.unshift({})
      }
      currentDayArray.push({high:highTemp});
      currentDayArray.push({low:lowTemp})
      days.push(currentDayArray);

      lowTemp = object.main.temp;
      highTemp = object.main.temp;
      currentDate = object.dt_txt.slice(8,10);
      currentDayArray = [];
    }
  })

  if(currentDayArray.length>0){
    while(currentDayArray.length!==5){
      currentDayArray.push({})
    }
    currentDayArray.push({high:highTemp});
    currentDayArray.push({low:lowTemp})
    days.push(currentDayArray);

  }

  return days;
}
