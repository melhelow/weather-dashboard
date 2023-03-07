// user enter city in search area
// user press search
// display search city date and weather in weather now container
  
// 5 days weather dsiplayed in each card
// append each day data inside each card
// save searched city below so user can reclick them use local storage
// 
var searchInput = document.querySelector('#city-search')
var search = document.querySelector('#search-button')
var currentWeather = document.querySelector('#weather-today')
var city = document.querySelector('#city-name')
var textInput =document.querySelector('#text-input')
var currentTemp = document.querySelector('#temp')
var humid = document.querySelector('#humidity')
var wind = document.querySelector('#wind')
// var fiveDays = document.querySelector('#5-days')
// var tempUnit =document.querySelector('imperial')
// var temprature = document.querySelector('#temp')
// var humid = document.querySelector('#humidity')

function displayWeather(event){
   event.preventDefault()
// console.log("hello")

   
    var apiKey = "7f2d505fb6241cc054341ef830069eae";
    // var weatherUrl = "api.openweathermap.org/data/2.5/forecast"
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + textInput.value  + "&appid=" + apiKey + "&units=imperial"

    fetch(requestUrl)
  .then(function(response) {
      return response.json();    
  }).then(function(weather){
    console.log(weather)
    // for (var i = 0; i < weather.length; i++)

    city.textContent= "Current weather in " + weather.name;
    currentTemp.textContent= "Temperature: " + weather.main.temp + " F";
    humid.textContent= "Humidity: " + weather.main.humidity +" %";
    wind.textContent = " Wind speed: " + weather.wind.speed + " MPH";
// 5 days
      
    var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + textInput.value  + "&appid=" + apiKey + "&units=imperial"
    
    // var forecast = document.querySelector ('#5-days')
    var dayOneTemp = document.querySelector('#day-1temp')
    var dayOnewind = document.querySelector('#day-1wind')
    var dayOneHumid = document.querySelector('#day-1humid')
    var dayTwoTemp = document.querySelector('#day-2temp')
    var dayTwoHumid = document.querySelector('#day-2humid')
    var dayTwoWind = document.querySelector('#day-2wind')
    var dayThreeTemp = document.querySelector('#day-3temp')
    var dayThreeHumid = document.querySelector('#day-3humid')
    var dayThreeWind = document.querySelector('#day-3wind')
    var dayFourTemp = document.querySelector('#day-4temp')
    var dayFourHumid = document.querySelector('#day-4humid')
    var dayFourWind = document.querySelector('#day-4wind')
    var dayFiveTemp = document.querySelector('#day-5temp')
    var dayFiveHumid = document.querySelector('#day-5humid')
    var dayFiveWind = document.querySelector('#day-5wind')

    fetch(requestUrl)
    .then(function(response) {
        return response.json();    
    }).then(function(forecast){
    console.log(forecast.list)
    //   for (var i = 3; i <forecast.list.length; i+=8){
        // console.log(forecast.list[i].main.temp)
        // console.log(forecast.list[i].main.humidity)
        // console.log(forecast.list[i].wind)
        
        dayOneTemp.textContent="Temp: " + forecast.list[5].main.temp+ " F";
        dayOnewind.textContent="speed:"+forecast.list[5].wind.speed + " MPH";
        dayOneHumid.textContent="Hum."+forecast.list[5].main.humidity+" %";

        dayTwoTemp.textContent="Temp: " + forecast.list[13].main.temp+ " F";
        dayTwoWind.textContent="speed:"+forecast.list[13].wind.speed + " MPH";
        dayTwoHumid.textContent="Hum."+forecast.list[13].main.humidity+" %";

        dayThreeTemp.textContent="Temp: " + forecast.list[21].main.temp+ " F";
        dayThreeWind.textContent="speed:"+forecast.list[21].wind.speed + " MPH";
        dayThreeHumid.textContent="Hum."+forecast.list[21].main.humidity+" %";

        dayFourTemp.textContent="Temp: " + forecast.list[29].main.temp+ " F";
        dayFourWind.textContent="speed:"+forecast.list[29].wind.speed + " MPH";
        dayFourHumid.textContent="Hum."+forecast.list[29].main.humidity+" %";

        dayFiveTemp.textContent="Temp: " + forecast.list[37].main.temp+ " F";
        dayFiveWind.textContent="speed:"+forecast.list[37].wind.speed + " MPH";
        dayFiveHumid.textContent="Hum."+forecast.list[37].main.humidity+" %";
         
    
   

})

})
}


        // dayOne.textContent= forecast.list[i].main.temp
    //    console.log(forecast.list)
        // var dayOne = document.createElement('p');
        // dayOne.textContent = forecast[i].main.temp;
        // firstDay.appendChild(dayOne);
        // var forecastTemp = forecast.list[i].main.temp;
        // var forcastWind = forecast.list[i].wind.speed;
        // var forecastHumidity = forecast.list[i].main.humidity;
        // console.log(forecastTemp)
        // console.log(forcastWind)
        // console.log(forecastHumidity)
       

        
    // humid.textContent= "Humidity: " + weather.main.humidity +" %";
    // wind.textContent = " Wind speed: " + weather.wind.speed + " MPH";
  
    
    // for (var i = 0; i < forecast.main.length; i++){
    //     var forecast = forecast.main[i].title
    //     console.log('title', title)
    // }


  

searchInput.addEventListener('submit', displayWeather);
