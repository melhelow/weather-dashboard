// user enter city in search area
// user press search
// display search city date and weather in weather now container
  
// 5 days weather dsiplayed in each card
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
// var tempUnit =document.querySelector('imperial')
// var temprature = document.querySelector('#temp')
// var humid = document.querySelector('#humidity')

function displayCurrentWeather(event){
   event.preventDefault()
// console.log("hello")

   
    var apiKey = "7f2d505fb6241cc054341ef830069eae";
    var weatherUrl = "api.openweathermap.org/data/2.5/forecast"
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
   
    
    // for (var i = 0; i < weather.main.length; i++){
    //     var weather = weather.main[i].title
    //     console.log('title', title)
    // }
})
}

  

searchInput.addEventListener('submit', displayCurrentWeather);

