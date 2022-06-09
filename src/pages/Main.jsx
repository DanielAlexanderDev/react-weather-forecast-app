import React from "react";
import Header from "../components/Header/Header";
import Form from "../components/Form/Form";
import useFetchWeather from "../hooks/useFetchWeather";
import Forecast from "../components/Forecast/Forecast";

const Main = () => {
  const { isError, isLoading, weatherInfo, submitRequest } = useFetchWeather();
  const onSubmit = (value) => {
    submitRequest(value);
  };
  return (
    <>
      <Header />
      <Form submitSearch={onSubmit} />
      {isLoading && <p>Cargando...</p>}
      {isError && <p>{isError}</p>}
      {weatherInfo && <Forecast forecast={weatherInfo} />}
    </>
  );
};

export default Main;
