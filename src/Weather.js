import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <h1>Perth</h1>
            <h5>Australia</h5>
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
              <li>Monday</li>
              <li>17 January 2022</li>
              <li>11:11</li>
            </ul>
          </div>
        </div>
        <h2>28ºC</h2>
        <h6>CLEAR SKY</h6>
      </div>
      <div class="row prevision-container">
        <div class="col card-container">
          <div class="card">
            <div class="card-body">
              <h6>FEELS LIKE</h6>
              <p>
                <span id="feels-like">27</span>º
              </p>
            </div>
          </div>
        </div>

        <div class="col card-container">
          <div class="card">
            <div class="card-body">
              <h6>HUMIDITY</h6>
              <p>
                <span id="humidity">44</span>%
              </p>
            </div>
          </div>
        </div>

        <div class="col card-container">
          <div class="card">
            <div class="card-body">
              <h6>WIND</h6>
              <p>
                <span id="wind-speed">6</span>km/h
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
