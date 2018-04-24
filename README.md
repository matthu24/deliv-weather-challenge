# deliv-weather-challenge

Live link: https://deliv-weather-challenge.herokuapp.com/#/

This is a single page weather forecast application using React.js, and a weather API for weather forecast data.  Users can search cities by zip code and view weather data.

The open weather map API (https://openweathermap.org/forecast5) gives five full days of weather forecast: a data point for every 3 hours, resulting in 38 data points.

## Component Structure 

I used to parent components in this application: the first is the search component, and the second is the weather_list component.  The weather_list component embodies all the weather data in the UI.  The weather_list_day component is a child component of weather_list, and renders one day's slice of data.  Lastly, weather_temp_item is a child component of weather_list_day and handles each temperature item in the temperature list at the bottom of the app. 

## Code Snippets

An interesting piece of code I wrote for this application was a parser function, which takes a list of unorganized json weather data from an API call and groups them into five days: the function returns a container array, which holds five subarrays representing the five days, which in turn holds each day's data point objects.  Also contained in each day's subarray is the high and low temperature for the day.

Here is an example subarray containing a day's worth of data point objects, as well as the high and low temperature:
```javascript
[
{dt: 1524992400, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …},
{dt: 1525003200, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …},
{dt: 1525014000, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …},
{dt: 1525024800, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …},
{dt: 1525035600, main: {…}, weather: Array(1), clouds: {…}, wind: {…}, …},
{high: 59.27},
{low: 41.3}
]
```

To track the high and low temperatures for the day, I wrote a greedy algorithm as part of my parser function:

```javascript
let lowTemp = data[0].main.temp;
let highTemp = data[0].main.temp;
data.forEach(object => {
  //update highs and lows
  if(object.main.temp < lowTemp){
    lowTemp = object.main.temp;
  }else if(object.main.temp > highTemp){
    highTemp = object.main.temp;
  }
  
 //...
 ```


The tricky thing about the parser function is that depending on the 
time of day the api call is made, each day may have more or less data points than the other days, specifically, the
first and last days would have less data points than the days in the middle. To account for this, I allowed the 
parser function to check if the first and last days had less data points than the days in the middle, and to push in empty objects if this were the case.  The reason for wanting an equal number of data points in the days subarrays is so that it would be 
easier to render in an html table later.  
