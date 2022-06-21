import React from "react";
import Header from "../components/Header/Header";
import Form from "../components/Form/Form";
import useFetchWeather from "../hooks/useFetchWeather";
import Forecast from "../components/Forecast/Forecast";
import Suggestions from "../components/Suggestions/Suggestions";
import ForecastLoader from "../components/ForecastLoader/ForecastLoader";

const Main = () => {
  const {
    isError,
    isLoading,
    weatherInfo,
    suggestions,
    submitRequest,
    changeSearch,
  } = useFetchWeather();

  const onSubmit = (value) => {
    submitRequest(value);
  };

  //TODO : Use input ref to enable or not suggestions.
  //TODO : Finish Styles, add react icons.

  return (
    <>
      <Header />
      <Form submitSearch={onSubmit} changeSearch={changeSearch} />
      {suggestions && <Suggestions data={suggestions} onSearch={onSubmit} />}
      {(!weatherInfo || isLoading) && <ForecastLoader />}
      {/* {isLoading && <ForecastLoader />} */}
      {isError && <p>{isError}</p>}
      {weatherInfo && !isLoading && <Forecast forecast={weatherInfo} />}
    </>
  );
};

export default Main;
