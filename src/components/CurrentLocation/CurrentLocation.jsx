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
      <img src={condition.iconUrl} />
      <p>{temperature}°C</p>
    </Container>
  );
};

export default CurrentLocation;
