export const parser = data => {
  //iterate through data, and for each list item, access listItem.dt_txt indices 8 and 9
  // 9 AM, 12, 15, 18 and 21
  let days = [];
  let currentDate = data[0].dt_txt.slice(8,10);//should be '24'
  let currentDayArray = [];
  data.forEach(object => {
    currentDayArray.push(object);
    if(object.dt_txt.slice(8,10) !== currentDate){
      days.push(currentDayArray);
      currentDate = object.dt_txt.slice(8,10);
      currentDayArray = [];
    }
  })
  days.push(currentDayArray);
  return days;
}
