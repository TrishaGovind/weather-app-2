import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-3">
        <div className="col-6 ps-5 pt-3">
          <h1>{props.data.city}</h1>
          <h5>{props.data.country}</h5>
        </div>
        <div className="col-6 mt-2 pe-5 pt-2">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
          </ul>
        </div>
      </div>
      <h2>{Math.round(props.data.temperature)}ºC</h2>
      <WeatherIcon code={props.data.icon} />
      <h6>{props.data.description}</h6>
    </div>
  );
}
