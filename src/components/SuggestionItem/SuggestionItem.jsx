import React from "react";
import useFetchWeather from "../../hooks/useFetchWeather";

const SuggestionItem = ({ info }) => {
  const { submitRequest } = useFetchWeather();
  return (
    <>
      <p
        onClick={() => submitRequest(info.name)}
      >{`${info.name}, ${info.country}`}</p>
    </>
  );
};

export default SuggestionItem;
