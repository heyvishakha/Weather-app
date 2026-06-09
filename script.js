async function getWeather() {
const city = document.getElementById("cityInput").value.trim();
const result = document.getElementById("weatherResult");

if (!city) {
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

if (data.weather[0].main === "Clouds") emoji = "☁️";
else if (data.weather[0].main === "Rain") emoji = "🌧️";
else if (data.weather[0].main === "Snow") emoji = "❄️";
else if (data.weather[0].main === "Thunderstorm") emoji = "⛈️";

if (data.weather[0].main === "Clear") {
  document.body.style.background =
    "linear-gradient(135deg,#56ccf2,#2f80ed)";
} else if (data.weather[0].main === "Clouds") {
  document.body.style.background =
    "linear-gradient(135deg,#bdc3c7,#2c3e50)";
} else if (data.weather[0].main === "Rain") {
  document.body.style.background =
    "linear-gradient(135deg,#141e30,#243b55)";
}

result.innerHTML = `
  <div class="weather-card">
    <h2>${data.name}</h2>
    <h1>${data.main.temp}°C</h1>
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
        <p>${data.main.feels_like}°C</p>
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
result.innerHTML = "<p>Something went wrong ❌</p>";
console.error(error);
}
}
`;
