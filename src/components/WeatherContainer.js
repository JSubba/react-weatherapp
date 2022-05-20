import React from "react";
import Content from "./Content";
import DateTime from "./DateTime";

const WeatherContainer = ({ query, setQuery, search, weather }) => {
  return (
    <div className="container">
      <div className="search-box">
        <input
          type="text"
          className="search"
          placeholder="Search your city weather"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />
        <svg
          width="16"
          height="16"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.8594 29.8594L39.4219 39.4219"
            stroke="#08c7d1"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.9062 33.0469C26.2682 33.0469 33.0469 26.2682 33.0469 17.9062C33.0469 9.54431 26.2682 2.76562 17.9062 2.76562C9.54431 2.76562 2.76562 9.54431 2.76562 17.9062C2.76562 26.2682 9.54431 33.0469 17.9062 33.0469Z"
            stroke="#08c7d1"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {weather.main && (
        <div className="city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </h2>
          <Content weather={weather} />
          <DateTime />
        </div>
      )}
    </div>
  );
};

export default WeatherContainer;
