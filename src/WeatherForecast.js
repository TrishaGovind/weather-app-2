import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col-4 pt-1">
            <ul className="text-center pt-2">
              <li>{forecast[0].dt}</li>
            </ul>
          </div>

          <div className="col-4 pt-1">
            <ul className="text-center pt-2">
              <li>
                <span className="WeatherForecast-max">
                  {forecast[0].temp.max}º
                </span>
                |
                <span className="WeatherForecast-min">
                  {forecast[0].temp.min}º
                </span>
              </li>
            </ul>
          </div>

          <div className="col-4">
            <ul>
              <li>
                <WeatherIcon code={forecast[0].weather[0].icon} size={40} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "0dc40d3d7cda209ca40e77430c74cf57";
    let longitude = props.data.coord.lon;
    let latitude = props.data.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
