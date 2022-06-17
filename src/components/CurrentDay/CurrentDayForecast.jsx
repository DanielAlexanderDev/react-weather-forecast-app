import React from "react";
import { Name, SectionContainer, Description } from "./styles";

const CurrentDayForecast = ({ forecast }) => {
  return (
    <SectionContainer>
      {forecast.map((item) => (
        <>
          <Name>{item.name}</Name>
          <Description>{`${item.value} ${item.unit}`}</Description>
        </>
      ))}
    </SectionContainer>
  );
};

export default CurrentDayForecast;
