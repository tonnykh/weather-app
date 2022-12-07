// let cityName = "London";

async function getData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=42228af3335be34c97a5ecec9960067b`, { mode: 'cors' });

        const locationData = await response.json();
        return locationData;
    } catch (error) {
    }
}

async function getWeatherData(locationName) {
    let locationData = await getData(locationName);
    // console.log(locationName);
    // console.log(locationData.weather[0]);
    console.log(locationData.weather[0].description);
}
    
// getWeatherData(cityName);


// DOM
const searchInput = document.querySelector("input");
const searchForm = document.querySelector("form")

searchForm.addEventListener("submit", (event) => {
    console.log(searchInput.value);
    event.preventDefault();
    getWeatherData(searchInput.value);
})
