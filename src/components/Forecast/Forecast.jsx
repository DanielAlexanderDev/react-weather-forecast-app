import React from "react";
import CurrentLocation from "../CurrentLocation/CurrentLocation";
import CurrentDayForecast from "../CurrentDay/CurrentDayForecast";
import NextDaysForecast from "../NextDaysForecast/NextDaysForecast";
import { ForecastContainer, SemiContainer } from "./styles";

const Forecast = ({ forecast }) => {
  return (
    <ForecastContainer>
      <SemiContainer>
        <CurrentLocation {...forecast.currentLocation} />
        <CurrentDayForecast forecast={forecast.currentDayForecast} />
      </SemiContainer>
      <NextDaysForecast forecast={forecast.nextDaysForecast} />
    </ForecastContainer>
  );
};

export default Forecast;
