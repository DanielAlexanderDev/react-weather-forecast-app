import React from "react";
import {
  Title,
  Container,
  Description,
  FlexContainer,
  TitleContainer,
  Image,
} from "./styles";

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
      <TitleContainer>
        <Title>{name}</Title>
      </TitleContainer>
      <Description country>{country}</Description>
      <FlexContainer>
        <div>
          <Description temperature>{temperature}°C</Description>
        </div>
        <FlexContainer right>
          <Image src={condition.iconUrl} />
          <Description>{localDate}</Description>
          <Description>{localTime}</Description>
          <Description>{condition.text}</Description>
        </FlexContainer>
      </FlexContainer>
    </Container>
  );
};

export default CurrentLocation;
