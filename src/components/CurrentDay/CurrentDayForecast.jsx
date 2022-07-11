import React from "react";
import { Name, SectionContainer, Description } from "./styles";

const CurrentDayForecast = ({ forecast }) => {
  return (
    <SectionContainer>
      {forecast.map((item) => (
        <div key={item.name}>
          <Name>{item.name}</Name>
          <Description>{`${item.value} ${item.unit}`}</Description>
        </div>
      ))}
    </SectionContainer>
  );
};

export default CurrentDayForecast;
