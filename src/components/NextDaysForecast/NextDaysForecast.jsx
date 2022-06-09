import React from "react";

const NextDaysForecast = ({ forecast }) => {
  return (
    <div>
      {forecast.map((item) => (
        <div key={item.day}>
          <h2>{item.day}</h2>
          <p>{item.maxTemp}</p>
          <p>{item.minTemp}</p>
          <p>{item.condition}</p>
          <p>{item.avgHumidity}</p>
          <p>{item.sunrise}</p>
          <p>{item.sunset}</p>
        </div>
      ))}
    </div>
  );
};

export default NextDaysForecast;
