// DOM
const cityName = document.querySelector("#cityName");
const temperature = document.querySelector('#temperature');
const feelsLike = document.querySelector('#feelsLike');
const humidity = document.querySelector('#humidity');
const wind = document.querySelector('#wind');

const searchInput = document.querySelector('input');
const searchForm = document.querySelector('form');


// Input Submit listen
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (searchInput.value === '') return;

  displayResult(searchInput.value);
});


// search result display
async function displayResult(userInputCityName) {
  const data = await getData(userInputCityName);
  if (!data) return;

  cityName.textContent = data.cityName;
  temperature.textContent = `${data.temperature} °C`;
  feelsLike.textContent = `Feels like: ${data.feelsLike} °C`;
  humidity.textContent = `Humidity: ${data.humidity} %`;
  wind.textContent = `Wind: ${data.windSpeed} km/h`;
}


// API fetch data
async function getData(userInputCityName) {
  const endpoint = (`https://api.openweathermap.org/data/2.5/weather?q=${userInputCityName}&units=metric&appid=42228af3335be34c97a5ecec9960067b`);

  try {
    const response = await fetch(endpoint, { mode: 'cors' });
    if (!response.ok) throw new Error(`City "${userInputCityName}" not found`);
    const locationData = processData(await response.json());
    return locationData;
  } catch (error) {
    alert(error);
    return null;
  }
}


// data process
function processData(cityWeatherData) {
  const {
    name: cityName,
    main: { temp: temperature, feels_like: feelsLike, humidity },
    wind: { speed: windSpeed },
  } = cityWeatherData;

  return {
    cityName, temperature, feelsLike, humidity, windSpeed,
  };
}


displayResult('0-0-');