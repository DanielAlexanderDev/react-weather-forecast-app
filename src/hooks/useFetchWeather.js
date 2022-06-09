import { useState } from "react";
import { getWeatherRequest } from "../api/getWeather";
import getCurrentForecast from "../helpers/getCurrentForecast";
import getCurrentLocation from "../helpers/getCurrentLocation";
import getNextDaysForecast from "../helpers/getNextDaysForecast";

const useFetchWeather = () => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const forecastInformationReady = (data) => {
    const currentDayForecast = getCurrentForecast(data);
    const currentLocation = getCurrentLocation(data);
    const nextDaysForecast = getNextDaysForecast(data);

    setWeatherInfo({ currentDayForecast, currentLocation, nextDaysForecast });
    setisLoading(false);
  };

  const submitRequest = async (location) => {
    setisLoading(true);
    setIsError(false);
    try {
      const data = await getWeatherRequest(location);
      forecastInformationReady(data);
    } catch (error) {
      setIsError(error.response.statusText);
      setisLoading(false);
    }
  };

  return {
    isLoading,
    isError,
    weatherInfo,
    submitRequest,
  };
};
export default useFetchWeather;
