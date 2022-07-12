import React from "react";
import { TiWeatherCloudy } from "react-icons/ti";
import {
  DaysContainer,
  DayCard,
  DayName,
  Description,
  DayNameContainer,
} from "./styles";

const NextDaysForecast = ({ forecast }) => {
  return (
    <DaysContainer>
      <DayNameContainer>
        <p>
          <TiWeatherCloudy />
        </p>
        <p>MaxTemp</p>
        <p>MinTemp</p>
        <p>Condition</p>
        <p>Humidity</p>
        <p>Sunrise Time</p>
        <p>Sunset Time</p>
      </DayNameContainer>
      {forecast.map((item) => (
        <DayCard key={item.day}>
          <DayName>{item.day}</DayName>
          <Description>{item.maxTemp}</Description>
          <Description>{item.minTemp}</Description>
          <Description>{item.condition}</Description>
          <Description>{item.avgHumidity}</Description>
          <Description>{item.sunrise}</Description>
          <Description>{item.sunset}</Description>
        </DayCard>
      ))}
    </DaysContainer>
  );
};

export default NextDaysForecast;
