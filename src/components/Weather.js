import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

function Weather() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bed89402dd51da372f50494315192d01`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="weather-container">
      <h2>Weather Conditions</h2>
      <label>
        Enter Location:
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <button onClick={getWeather}>Get Weather</button>

      {weatherData && (
        <div className="weather-details">
          <h3>Current Weather in {weatherData.name}</h3>
          <p>Temperature: {weatherData.main.temp - 273.15} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
