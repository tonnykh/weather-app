async function getData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=42228af3335be34c97a5ecec9960067b`, { mode: 'cors' });

        const locationData = await response.json();
        return locationData;

    } catch (error) {
    }
}


function processData(cityData) {
    const {
      name: cityName,
      main: { temp: temperature, feels_like: feelsLike, humidity },
      wind: { speed: windSpeed },
    } = cityData;

    return { cityName, temperature, feelsLike, humidity, windSpeed };
}
    


// DOM

// Submit listen
const searchInput = document.querySelector("input");
const searchForm = document.querySelector("form")

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    displayResult(searchInput.value);
})

// search result display
const cityName = document.querySelector("#cityName");
const temperature = document.querySelector("#temperature");
const feelsLike = document.querySelector("#feelsLike");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");

async function displayResult(city) {

    let data = await getData(city);

    let newData = processData(data);

    cityName.textContent = newData.cityName;
    temperature.textContent = `${newData.temperature} °C`;
    feelsLike.textContent = `Feels like: ${newData.feelsLike} °C`;
    humidity.textContent = `Humidity: ${newData.humidity} %`;
    wind.textContent = `Wind: ${newData.windSpeed} km/h`;
}

displayResult("delhi");