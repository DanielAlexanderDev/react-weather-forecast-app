import React from "react";
import CurrentLocation from "../CurrentLocation/CurrentLocation";
import CurrentDayForecast from "../CurrentDay/CurrentDayForecast";
import NextDaysForecast from "../NextDaysForecast/NextDaysForecast";

const Forecast = ({ forecast }) => {
  return (
    <div>
      <CurrentLocation {...forecast.currentLocation} />
      <CurrentDayForecast forecast={forecast.currentDayForecast} />
      <NextDaysForecast forecast={forecast.nextDaysForecast} />
    </div>
  );
};

export default Forecast;
