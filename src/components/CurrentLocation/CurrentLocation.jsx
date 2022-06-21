import React from "react";
import { Title, Container } from "./styles";

const CurrentLocation = ({
  name,
  country,
  localTime,
  localDate,
  condition,
  temperature,
}) => {
  return (
    <Container>
      <Title>{name}</Title>
      <p>{country}</p>
      <p>{localTime}</p>
      <p>{localDate}</p>
      <p>{condition.text}</p>
      <p>{temperature}°C</p>
      <img src={condition.iconUrl} />
    </Container>
  );
};

export default CurrentLocation;
