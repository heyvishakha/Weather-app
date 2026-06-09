async function getWeather() {

  let city = document.getElementById("cityInput").value;
  let result = document.getElementById("weatherResult");

  if(city === ""){
    result.innerText = "Enter city first 😒";
    return;
  }

  let apiKey = "YOUR_API_KEY";

  let url =
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  let response = await fetch(url);
  let data = await response.json();

  let emoji = "☀️";

  if(data.weather[0].main === "Clouds") emoji = "☁️";
  if(data.weather[0].main === "Rain") emoji = "🌧️";

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
}
`;
