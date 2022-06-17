import React from "react";
import { DaysContainer, DayCard } from "./styles";

const NextDaysForecast = ({ forecast }) => {
  return (
    <DaysContainer>
      {forecast.map((item) => (
        <DayCard key={item.day}>
          <h2>{item.day}</h2>
          <p>{item.maxTemp}</p>
          <p>{item.minTemp}</p>
          <p>{item.condition}</p>
          <p>{item.avgHumidity}</p>
          <p>{item.sunrise}</p>
          <p>{item.sunset}</p>
        </DayCard>
      ))}
    </DaysContainer>
  );
};

export default NextDaysForecast;
