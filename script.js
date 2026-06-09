function handleKeyPress(event) {
if (event.key === "Enter") {
getWeather();
}
}

async function getWeather() {
const city = document.getElementById("cityInput").value.trim();
const result = document.getElementById("weatherResult");

if (!city) {
result.innerHTML = "<p>Enter a city name 😒</p>";
return;
}

result.innerHTML = "<p>Loading...</p>";

try {
const response = await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5913e31fdf174d4c50968a7b425a1395&units=metric`
);

const data = await response.json();

if (data.cod != 200) {
  result.innerHTML = "<p>City not found ❌</p>";
  return;
}

result.innerHTML = `
  <h2>${data.name}</h2>
  <h1>${Math.round(data.main.temp)}°C</h1>
  <p>${data.weather[0].main}</p>
  <p>Humidity: ${data.main.humidity}%</p>
  <p>Wind: ${data.wind.speed} m/s</p>
  <p>Feels Like: ${Math.round(data.main.feels_like)}°C</p>
  <p>Pressure: ${data.main.pressure} hPa</p>
`;


} catch (error) {
result.innerHTML = "<p>Error loading weather ❌</p>";
console.log(error);
}
}

