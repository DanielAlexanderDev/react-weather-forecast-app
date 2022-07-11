import React from "react";
import CurrentLocation from "../CurrentLocation/CurrentLocation";
import CurrentDayForecast from "../CurrentDay/CurrentDayForecast";
import NextDaysForecast from "../NextDaysForecast/NextDaysForecast";
import { ForecastContainer, SemiContainer } from "./styles";
import { getImgUrl } from "../../helpers/getImgUrl";

const Forecast = ({ forecast }) => {
  const url = getImgUrl(forecast);
  return (
    <ForecastContainer>
      <SemiContainer imgUrl={url}>
        <CurrentLocation {...forecast.currentLocation} />
        <CurrentDayForecast forecast={forecast.currentDayForecast} />
      </SemiContainer>
      <NextDaysForecast forecast={forecast.nextDaysForecast} />
    </ForecastContainer>
  );
};

export default Forecast;
