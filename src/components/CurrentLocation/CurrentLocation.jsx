import React from "react";

const CurrentLocation = ({
  name,
  country,
  localTime,
  condition,
  temperature,
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{country}</p>
      <p>{localTime}</p>
      <p>{condition.text}</p>
      <img src={condition.iconUrl} />
      <p>{temperature}</p>
    </div>
  );
};

export default CurrentLocation;
