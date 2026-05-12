const API_KEY = "1aa3b3a2a30479c44d2b14e77bed9a07"
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather?appid=" + API_KEY + "&q=";

function getWeatherData(city, callback) {
    const url = BASE_URL + city;

    fetch(url)
        .then((res) => res.json())
        .then((weatherData) => callback(null, weatherData))
        .catch((error) => callback(error, null));
}

function displayWeather(city) {
    getWeatherData(city, (error, data) => {
        if (error) {
            console.error("Error fetching weather data:", error);
            console.log("Please check your API key or city name.");
        } else {
            const tempCelsius = (data.main.temp - 273.15).toFixed(1);
            const tempFahrenheit = ((data.main.temp - 273.15) * 9/5 + 32).toFixed(1);
            const humidity = data.main.humidity;
            const cityName = data.name;
            const country = data.sys.country;

            console.log(`\n Weather in ${cityName}, ${country}:`);
            console.log(`️Temperature: ${tempCelsius}°C / ${tempFahrenheit}°F`);
            console.log(` Humidity: ${humidity}%`);
        }
    });
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a city name: ", (city) => {
    if (city.trim() === "") {
        console.log("Please enter a valid city name.");
        displayWeather("London"); // Default city
    } else {
        displayWeather(city);
    }
    rl.close();
});