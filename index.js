let cityName = "London";


// return weather data for that city
async function getData(city) {
    try {
        const response = await fetch(`https://api.openweathermaporg/data/2.5/weather?q=${city}appid=42228af3335be34c97a5ecec9960067b`, { mode:'cors' });

        const locationData = await response.json();
        return locationData;
    } catch (error) {
    }
};

// get data & return only the required data
async function getWeatherData(locationName) {
    let locationData = await getData(locationName);
    console.log(locationData.weather[0], "nknkn");
}

getWeatherData(cityName);