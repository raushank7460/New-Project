async function getWeather() {
  const city = document.getElementById("cityInput").value;

  // Step 1: Convert city to latitude & longitude
  const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
  const geoResponse = await fetch(geoUrl);
  const geoData = await geoResponse.json();

  if (!geoData.results || geoData.results.length === 0) {
    document.getElementById("weatherResult").innerHTML = "City not found!";
    return;
  }

  const { latitude, longitude, name, country } = geoData.results[0];

  // Step 2: Fetch weather using coordinates
  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`;
  const weatherResponse = await fetch(weatherUrl);
  const weatherData = await weatherResponse.json();

  const temperature = weatherData.hourly.temperature_2m[0];

  // Step 3: Display result
  document.getElementById("weatherResult").innerHTML = `
    <p><strong>City:</strong> ${name}, ${country}</p>
    <p>🌡 Temperature: <strong>${temperature}°C</strong></p>
  `;
}
