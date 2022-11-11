import "./style.css";
import "./images/sun.png";

const keyAPI = "6a05841f2373c91d8b30521b5947eaf8";
const currentCity = "Kathmandu";
const temperature = document.querySelector(".temperature");

const inputBar = document.querySelector("input");
console.log(inputBar);

inputBar.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    console.log("runnign enter key event");
    displayValues(inputBar.value);
  }
});

function displayValues(cityName) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${keyAPI}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      let temperatureaValue = Math.round(response.main.temp - 273.15);
      temperature.textContent = temperatureaValue + "\u00B0C";
    });
}
