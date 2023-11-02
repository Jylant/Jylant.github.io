const API_KEY = config.WEATHER_API_KEY; // Replace with your own API key from openweathermap.org
const CITY = 'Oulu';
const COUNTRY_CODE = 'FI';

function fetchWeatherData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY_CODE}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            const weatherData = {
                city: data.name,
                country: data.sys.country,
                temperature: Math.round(data.main.temp - 273.15),
                description: data.weather[0].description,
                icon: data.weather[0].icon
            };

            const iframe = document.getElementById('ruutu');
            iframe.srcdoc = `
                <html>
                    <head>
                        <title>Weather in ${weatherData.city}, ${weatherData.country}</title>
                        <link rel="stylesheet" href="/styles/weatherstyle.css">
                    </head>
                    <body>
                        <h1>Weather in ${weatherData.city}, ${weatherData.country}</h1>
                        <p>Temperature: ${weatherData.temperature}°C</p>
                        <p>Description: ${weatherData.description}</p>
                        <img src="https://openweathermap.org/img/w/${weatherData.icon}.png" alt="${weatherData.description}">
                    </body>
                </html>`;
        })
        .catch(error => console.error("Error: ", error));
}

document.addEventListener('DOMContentLoaded', () => {
    fetchWeatherData();
});
