async function getWeather() {
  let city = document.getElementById("cityInput").value;
  let result = document.getElementById("weatherResult");

  // empty check
  if (city === "") {
    result.innerText = "Enter city first 😒";
    return;
  }

  result.innerText = "Loading...";

  let apiKey = "5913e31fdf174d4c50968a7b425a1395";

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  let response = await fetch(url);
  let data = await response.json();

  console.log(data);

  // city not found
  if (data.cod === "404") {
    result.innerText = "City not found ❌";
    return;
  }

  // emoji
  let emoji = "☀️";
  if (data.weather[0].main === "Clouds") emoji = "☁️";
  if (data.weather[0].main === "Rain") emoji = "🌧️";

  // background change
  if (data.weather[0].main === "Clear") {
    document.body.style.background = "lightblue";
  } else if (data.weather[0].main === "Clouds") {
    document.body.style.background = "gray";
  } else if (data.weather[0].main === "Rain") {
    document.body.style.background = "darkblue";
  }

  // show UI
  result.innerHTML = `
    <h2>${data.name}</h2>
    <h3>${data.main.temp}°C</h3>
    <p>${emoji} ${data.weather[0].main}</p>
  `;
}