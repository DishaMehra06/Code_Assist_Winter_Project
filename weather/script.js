function getWeather() {
  const city = document.getElementById('city').value;
  const result = document.getElementById('result');

  if (!city) {
    result.textContent = 'Please enter a city name.';
    return;
  }

  const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        result.textContent = `Weather in ${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
      } else {
        result.textContent = 'City not found.';
      }
    })
    .catch(() => {
      result.textContent = 'Error fetching data. Try again later.';
    });
}
