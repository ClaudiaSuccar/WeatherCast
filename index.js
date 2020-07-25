// allows you to modify the city in the URL
let city = document.getElementById("city-selection").value;

//allows you to modify the units in the URL
let unit = document.getElementById("unit-selection").value;

let mainContainer = document.getElementById("mainContainer");

$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + unit + "&APPID=83e4b7f561175c10d89b30e8e704e6cd", function(data) {
 console.log(data); // console logs API js file, important for reference

 //gets icon from weather array
let icon = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";

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

// sets bg color of main container depending on the weather
if(weather === "Clear") {
    mainContainer.classList.remove("rain-weather", "clouds-weather");
    mainContainer.classList.add("clear-weather");
    console.log("Changed to clear");
    console.log(mainContainer.classList)
} else if(weather === "Rain" || weather === "Thunderstorm") {
    mainContainer.classList.remove("clear-weather", "clouds-weather");
    mainContainer.classList.add("rain-weather");
    console.log("Changed to non-clear");
} 
else {
    mainContainer.classList.remove("clear-weather", "rain-weather");
    mainContainer.classList.add("clouds-weather");
    console.log("Changed to clear");
    console.log(mainContainer.classList);
}
});

function changeCity() {
    city = document.getElementById("city-selection").value;
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + unit + "&APPID=83e4b7f561175c10d89b30e8e704e6cd", function(data) {
    icon = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
    temp = Math.round(data.main.temp);
    weather = data.weather[0].main;
    $('.icon').empty();
    $('.icon').attr('src', icon);
    $('.weather').empty();
    $('.weather').append(weather);
    $('.temp').empty();
    $('.temp').append(temp);
    // resets main container background color based on the weather
    if(weather === "Clear") {
        mainContainer.classList.remove("rain-weather", "clouds-weather");
        mainContainer.classList.add("clear-weather");
        console.log("Changed to clear");
        console.log(mainContainer.classList)
    } else if(weather === "Rain" || weather === "Thunderstorm") {
        mainContainer.classList.remove("clear-weather", "clouds-weather");
        mainContainer.classList.add("rain-weather");
        console.log("Changed to non-clear");
    } 
    else {
        mainContainer.classList.remove("clear-weather", "rain-weather");
        mainContainer.classList.add("clouds-weather");
        console.log("Changed to clear");
        console.log(mainContainer.classList);
    }
    });
}


// function to reset the unit on the page without affecting other things
function changeUnit() {
    unit = document.getElementById("unit-selection").value;
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + unit + "&APPID=83e4b7f561175c10d89b30e8e704e6cd", function(data) {
    temp = Math.round(data.main.temp);
    $('.temp').empty();
    $('.temp').append(temp);
    });
}