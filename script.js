const apiKey = "fd21a785c558e3897672942ccc378056"; // Replace with your real API key
let map;

document.getElementById("voiceBtn").addEventListener("click", () => {
  const recog = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recog.lang = "en-US";
  recog.start();
  recog.onresult = e => {
    const city = e.results[0][0].transcript;
    document.getElementById("cityInput").value = city;
    getWeather();
  };
});

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) return alert("Please enter a city name.");

  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("weatherNow").innerHTML = `
        <h2>${data.city.name}</h2>
        <p>${data.list[0].weather[0].description}</p>
        <div class="temp-box">
          ${Math.round(data.list[0].main.temp)}<span class="degree">°C</span>
        </div>
      `;
      renderHourly(data.list);
      renderMap(data.city.coord.lat, data.city.coord.lon, data.city.name);
    })
    .catch(() => alert("City not found or API error"));
}

function renderHourly(list) {
  const forecast = document.getElementById("forecast");
  const title = document.getElementById("forecastTitle");
  forecast.innerHTML = "";

  const next24 = list.slice(0, 8);

  next24.forEach(hour => {
    const dt = new Date(hour.dt * 1000);
    const icon = getEmoji(hour.weather[0].main);

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div>${dt.getHours()}:00</div>
      <div class="weather-icon">${icon}</div>
      <div><b>${Math.round(hour.main.temp)}°C</b></div>
      <div>wind speed💨${hour.wind.speed}m/s</div>
      <div>humidity💧${hour.main.humidity}%</div>
    `;
    forecast.appendChild(card);
  });

  forecast.classList.remove("hidden");
  title.classList.remove("hidden");
}

function renderMap(lat, lon, city) {
  const mapDiv = document.getElementById("map");
  document.getElementById("mapTitle").classList.remove("hidden");
  mapDiv.classList.remove("hidden");

  if (!map) {
    map = L.map("map").setView([lat, lon], 10);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    L.marker([lat, lon]).addTo(map).bindPopup(`${city}`).openPopup();
  } else {
    map.setView([lat, lon], 10);
    L.marker([lat, lon]).addTo(map).bindPopup(`${city}`).openPopup();
  }
}

function getEmoji(condition) {
  const c = condition.toLowerCase();
  if (c.includes("clear")) return "☀️";
  if (c.includes("cloud")) return "☁️";
  if (c.includes("rain")) return "🌧️";
  if (c.includes("storm")) return "⛈️";
  if (c.includes("snow")) return "❄️";
  return "🌈";
}
