function updateWeatherData(response) {
  let temperatureElement = document.querySelector("#temperature");
  let currentTemperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = currentTemperature;
  let humidityElemet = document.querySelector("#humidity");
  let currentHumidity = Math.round(response.data.temperature.humidity);
  humidityElemet.innerHTML = `${currentHumidity}%`;
  let windElemet = document.querySelector("#wind");
  windElemet.innerHTML = `${response.data.wind.speed}km/h`;
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
}

function searchCity(city) {
  let apiKey = "e524f1c78bfe38ebac06te4dobcfe805";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeatherData);
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let city = document.querySelector("#city");
  city.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", search);

searchCity("Casablanca");
