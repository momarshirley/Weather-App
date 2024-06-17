import React, { useEffect, useRef, useState } from "react";
import "./weather.css";
import humidity_icon from "../../assets/humidity.png";
import wind_icon from "../../assets/wind.png";
import { fetchWeatherData } from "../../services/weatherService";
import SearchBar from "../SearchBar/SearchBar";

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);

  const onButtonClick = async () => {
    const data = await fetchWeatherData(inputRef.current.value);
    setWeatherData(data);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onButtonClick();
    }
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      const data = await fetchWeatherData("San Diego");
      setWeatherData(data);
    };
    fetchInitialData();
  }, []);

  return (
    <div className="weather">
      <SearchBar
        inputRef={inputRef}
        onButtonClick={onButtonClick}
        handleKeyDown={handleKeyDown}
      />

      {
        weatherData && (
          <>
            <img
              src={weatherData.icon}
              alt="Clear Icon"
              className="weather-icon"
            />
            <p className="temperature">{weatherData.temperature}&#8457;</p>
            <p className="location">{weatherData.location}</p>
            <div className="weather-data">
              <div className="col">
                <img src={humidity_icon} alt="Humidity Icon" />
                <div>
                  <p>{weatherData.humidity}%</p>
                  <span>Humidity</span>
                </div>
              </div>
              <div className="col">
                <img src={wind_icon} alt="Wind Icon" />
                <div>
                  <p>{weatherData.windSpeed} mph</p>
                  <span>Wind Speed</span>
                </div>
              </div>
            </div>
          </>
        )
        //: null
      }
    </div>
  );
};

export default Weather;
