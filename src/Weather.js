import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container-main">
          <form>
            <input
              type="text"
              placeholder="Enter a city"
              className="form-control"
              autoComplete="off"
            />
            <input type="submit" value="Search" className="btn btn-primary" />
          </form>
          <div className="row mt-3">
            <div className="col-4 ps-5 pt-3">
              <h1>{weatherData.city}</h1>
              <h5>{weatherData.country}</h5>
            </div>
            <div className="col-4">
              <img
                src="http://openweathermap.org/img/wn/01d@2x.png"
                alt="clear sky"
                className="center-block"
                width="100"
              />
            </div>

            <div className="col-4 mt-2 pe-5 pt-3">
              <ul>
                <li>
                  <FormattedDate date={weatherData.date} />
                </li>
              </ul>
            </div>
          </div>
          <h2>{Math.round(weatherData.temperature)}ºC</h2>
          <h6>{weatherData.description}</h6>
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
      </div>
    );
  } else {
    const apiKey = "0dc40d3d7cda209ca40e77430c74cf57";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
