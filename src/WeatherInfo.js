import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-3">
        <div className="col-6 ps-4 pt-3">
          <h1>{props.data.city}</h1>
          <h5>{props.data.country}</h5>
        </div>
        <div className="col-6 mt-2 pe-4 pt-2">
          <ul className="FormattedDate">
            <li>
              <FormattedDate date={props.data.date} />
            </li>
          </ul>
        </div>
      </div>
      <h2>{Math.round(props.data.temperature)}ºC</h2>
      <h6>{props.data.description}</h6>
    </div>
  );
}
