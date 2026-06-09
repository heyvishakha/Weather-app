async function getWeather() {
const city = document.getElementById("cityInput").value.trim();
const result = document.getElementById("weatherResult");

if (city === "") {
result.innerHTML = "<p>Enter a city name 😒</p>";
return;
}

result.innerHTML = "<p>Loading...</p>";

const apiKey = "5913e31fdf174d4c50968a7b425a1395";

try {
const response = await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
);

```
const data = await response.json();

if (data.cod != 200) {
  result.innerHTML = "<p>City not found ❌</p>";
  return;
}

let emoji = "☀️";

switch (data.weather[0].main) {
  case "Clouds":
    emoji = "☁️";
    document.body.style.background =
      "linear-gradient(135deg,#bdc3c7,#2c3e50)";
    break;

  case "Rain":
    emoji = "🌧️";
    document.body.style.background =
      "linear-gradient(135deg,#141e30,#243b55)";
    break;

  case "Snow":
    emoji = "❄️";
    document.body.style.background =
      "linear-gradient(135deg,#e6dada,#274046)";
    break;

  default:
    emoji = "☀️";
    document.body.style.background =
      "linear-gradient(135deg,#74ebd5,#ACB6E5)";
}

result.innerHTML = `
  <div class="weather-card">
    <h2>${data.name}</h2>
    <h1>${Math.round(data.main.temp)}°C</h1>
    <p>${emoji} ${data.weather[0].main}</p>

    <div class="details">
      <div class="detail-card">
        <h4>💧 Humidity</h4>
        <p>${data.main.humidity}%</p>
      </div>

      <div class="detail-card">
        <h4>🌬 Wind</h4>
        <p>${data.wind.speed} m/s</p>
      </div>

      <div class="detail-card">
        <h4>🌡 Feels Like</h4>
        <p>${Math.round(data.main.feels_like)}°C</p>
      </div>

      <div class="detail-card">
        <h4>📈 Pressure</h4>
        <p>${data.main.pressure} hPa</p>
      </div>
    </div>
  </div>
`;
```

} catch (error) {
result.innerHTML = "<p>Error loading weather data ❌</p>";
console.log(error);
}
}
