import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}º`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="row mt-3 mb-3">
        <div className="col-4 pt-1 pe-5">
          <ul className="text-center pt-2">
            <li>{day()}</li>
          </ul>
        </div>

        <div className="col-4 pt-1">
          <ul className="text-center pt-2">
            <li>
              <span className="WeatherForecast-max">{maxTemperature()}</span>|
              <span className="WeatherForecast-min">{minTemperature()}</span>
            </li>
          </ul>
        </div>

        <div className="col-4">
          <ul>
            <li>
              <WeatherIcon code={props.data.weather[0].icon} size={40} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
