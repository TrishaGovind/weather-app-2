import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "0dc40d3d7cda209ca40e77430c74cf57";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container-main">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter a city"
              className="form-control"
              autoComplete="off"
              onChange={handleCityChange}
            />
            <input type="submit" value="Search" className="btn btn-primary" />
          </form>
          <WeatherInfo data={weatherData} />
        </div>
        <div className="row prevision-container">
          <div className="col card-container">
            <div className="card">
              <div className="card-body">
                <h6>FEELS LIKE</h6>
                <p>
                  <span id="feels-like">
                    {Math.round(weatherData.feelsLike)}
                  </span>
                  º
                </p>
              </div>
            </div>
          </div>

          <div className="col card-container">
            <div className="card">
              <div className="card-body">
                <h6>HUMIDITY</h6>
                <p>
                  <span id="humidity">{weatherData.humidity}</span>%
                </p>
              </div>
            </div>
          </div>

          <div className="col card-container">
            <div className="card">
              <div className="card-body">
                <h6>WIND</h6>
                <p>
                  <span id="wind-speed">
                    {Math.round(weatherData.wind * 3.6)}
                  </span>
                  km/h
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container-forecast">
          <WeatherForecast data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
