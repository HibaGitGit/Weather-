const axios = require('axios');

const API_KEY = "1aa3b3a2a30479c44d2b14e77bed9a07";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

async function getWeather(city) {
    try {
        const url = `${BASE_URL}?appid=${API_KEY}&q=${city}&units=metric`;
        const response = await axios.get(url);
        
        const temp = response.data.main.temp;
        const hum = response.data.main.humidity;
        
        console.log(`Ville: ${city}`);
        console.log(`Température: ${temp}°C`);
        console.log(`Humidité: ${hum}%`);
        
    } catch (error) {
        console.log(`Erreur: Ville "${city}" non trouvée`);
    }
}

// Test
getWeather("Paris");