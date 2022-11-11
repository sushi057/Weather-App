import "./style.css";
import "./images/sun.png";

const keyAPI = "6a05841f2373c91d8b30521b5947eaf8";
const currentTemp = document.querySelector(".temperature");
const currentPlace = document.querySelector(".place");
const currentTime = document.querySelector(".time");
const curretDay = document.querySelector(".day");
const weatherText = document.querySelector(".text");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const cloudy = document.querySelector(".cloudy");

const inputBar = document.querySelector("input");

inputBar.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    displayValues(inputBar.value);
  }
});

function displayValues(cityName) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${keyAPI}`
  )
    .then(function (response) {
    //   console.log(response.json());
      return response.json();
    })
    .then(function (response) {
      let temperaturea = Math.round(response.main.temp - 273.15);
      currentTemp.textContent = temperaturea + "\u00B0C";

      currentPlace.textContent = response.name;

      humidity.textContent = response.main.humidity + "%";

      wind.textContent = response.wind.speed + "m/s";

      cloudy.textContent = response.clouds.all + "%";

      weatherText.textContent = response.weather[0].main;
    });
}

function weatherCaption(temperature) {
  //code
}

function weatherBackground(temperature) {
  //code
}

function cToF(temperature) {
  //code
}

displayValues("Kathmandu");
