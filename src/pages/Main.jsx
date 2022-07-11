import React from "react";
import Header from "../components/Header/Header";
import Form from "../components/Form/Form";
import useFetchWeather from "../hooks/useFetchWeather";
import Forecast from "../components/Forecast/Forecast";

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

  return (
    <>
      <Header />
      <main>
        <Form
          submitSearch={onSubmit}
          changeSearch={changeSearch}
          suggestions={suggestions}
        />
        {isLoading && <h3 style={{ color: "white" }}>Cargando...</h3>}
        {isError && <p>{isError}</p>}
        {weatherInfo && !isLoading && <Forecast forecast={weatherInfo} />}
      </main>
      <footer>
        <h4 style={{ color: "white", paddingBottom: "20px" }}>
          Developed by Daniel Alexander
        </h4>
      </footer>
    </>
  );
};

export default Main;
