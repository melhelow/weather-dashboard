// display search city date and weather in weather now container
  
// 5 days weather dsiplayed in each card
// save searched city below so user can reclick them use local storage
// 
var searchInput = document.querySelector('#city-search')
var search = document.querySelector('#search-button')
var currentWeather = document.querySelector('#weather-today')
var city = document.querySelector('#city-name')
var temprature = document.querySelector('#temp')
var humid = document.querySelector('#humidity')

function displayCurrentWeather(cityName){
    event.preventDefault()

    
    var apiKey = '7f2d505fb6241cc054341ef830069eae'
    var weatherUrl = 'api.openweathermap.org/data/2.5/forecast'
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?id=" + cityName + "&appid=" + apiKey

    fetch(requestUrl)
  .then(function(response) {
      return response.json()    
  }).then(function(weather){
    console.log('here is weather', weather)

    // for (var i = 0; i < weather.data.length; i++){
    //     var title = weather.main[i].title
    //     console.log('title', title)
    // }
})
}