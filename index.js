// allows you to modify the city in the URL
let city = document.getElementById("city-selection").value;

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=83e4b7f561175c10d89b30e8e704e6cd", function(data) {
 console.log(data); // console logs API js file, important for reference

 //gets icon from weather array
let icon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";

// access temp data from file (see the API js file for this stuff, it's also console logged in the browser), round gets rid of decimal units
let temp = Math.round(data.main.temp);

// access main data from weather
let weather = data.weather[0].main;

//gets class icon and assigns attribute source to icon
$('.icon').attr('src', icon);

// append weather data to weather class
$('.weather').append(weather);

// appends temp data to temp class
$('.temp').append(temp);
});

function changeCity() {
    city = document.getElementById("city-selection").value;
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=83e4b7f561175c10d89b30e8e704e6cd", function(data) {
    icon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
    temp = Math.round(data.main.temp);
    weather = data.weather[0].main;
    $('.icon').empty();
    $('.icon').attr('src', icon);
    $('.weather').empty();
    $('.weather').append(weather);
    $('.temp').empty();
    $('.temp').append(temp);
    });
}