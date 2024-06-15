import React from "react";
import "./weather.css";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import rain_icon from "../assets/rain.png";
import search_icon from "../assets/search.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";

const Weather = () => {
  return (
    <>
      <div className="weather">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <img src={search_icon} alt="Search Icon" />
        </div>
        <p className="temperature">65 &#8457;</p>
        <p className="location">San Diego</p>
        <img src={clear_icon} alt="Clear Icon" className="weather-icon" />
        <div className="weather-data">
          <div className="col">
            <img src={humidity_icon} alt="Humidity Icon" />
            <div>
              <p>91 %</p>
              <span>Humidity</span>
            </div>
          </div>
          <div className="col">
            <img src={wind_icon} alt="Wind Speed Icon" />
            <div>
              <p>20 mph</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
