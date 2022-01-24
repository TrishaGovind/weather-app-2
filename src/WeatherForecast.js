import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col-4 pt-1">
            <ul className="text-center pt-2">
              <li>Monday</li>
            </ul>
          </div>

          <div className="col-4 pt-1">
            <ul className="text-center pt-2">
              <li>
                <span className="WeatherForecast-max">29º</span>|
                <span className="WeatherForecast-min">19º</span>
              </li>
            </ul>
          </div>

          <div className="col-4">
            <ul>
              <li>
                <WeatherIcon code={props.data.icon} size={40} />
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
