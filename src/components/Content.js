import React from "react";

const Content = ({ weather }) => {
  return (
    <>
      <div className="city-temp">
        {Math.round(weather.main.temp)}
        <sup>&deg;C</sup>
        <div className="wrap">
          <span>
            MIN:{weather.main.temp_min}
            <sup>&deg;C</sup>
          </span>
          <span>
            MAX:{weather.main.temp_max}
            <sup>&deg;C</sup>
          </span>
        </div>
        <div className="second-wrap">
          <span>
            Sunrise:{" "}
            {new Date(weather.sys.sunrise * 1000).toLocaleTimeString("en-JP", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
          <span>
            Sunset:{" "}
            {new Date(weather.sys.sunset * 1000).toLocaleTimeString("en-JP", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
      </div>
      <div className="info">
        <img
          className="city-icon"
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <p>{weather.weather[0].description}</p>
      </div>
    </>
  );
};

export default Content;
