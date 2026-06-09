result.innerHTML = `

  <div class="weather-card">
    <h2>${data.name}</h2>
    <h1>${data.main.temp}°C</h1>
    <p>${emoji} ${data.weather[0].main}</p>

```
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
```

  </div>
`;
