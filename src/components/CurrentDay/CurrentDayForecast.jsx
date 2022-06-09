import React from "react";

const CurrentDayForecast = ({ forecast }) => {
  return (
    <div>
      {forecast.map((item) => (
        <div key={item.name}>
          <h3>{item.name}</h3>
          <p>{`${item.value} ${item.unit}`}</p>
        </div>
      ))}
    </div>
  );
};

export default CurrentDayForecast;
