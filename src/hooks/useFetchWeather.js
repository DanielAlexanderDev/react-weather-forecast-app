import { useState } from "react";
import { getAutocompleteRequest } from "../api/getAutocompleteRequest";
import { getWeatherRequest } from "../api/getWeather";
import getCurrentForecast from "../helpers/getCurrentForecast";
import getCurrentLocation from "../helpers/getCurrentLocation";
import getNextDaysForecast from "../helpers/getNextDaysForecast";

const useFetchWeather = () => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchedValue, setSearchedValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const forecastInformationReady = (data) => {
    const currentDayForecast = getCurrentForecast(data);
    const currentLocation = getCurrentLocation(data);
    const nextDaysForecast = getNextDaysForecast(data);

    setWeatherInfo({ currentDayForecast, currentLocation, nextDaysForecast });
    setisLoading(false);
  };

  const changeSearch = async (value) => {
    if (!value || value === "") {
      setSuggestions([]);
      return;
    }
    setSearchedValue(value);

    const data = await getAutocompleteRequest(value);
    if (searchedValue === value) {
      setSuggestions(data);
      return;
    }
    setSuggestions(data);
  };
  const submitRequest = async (location) => {
    setisLoading(true);
    setIsError(false);
    setSuggestions([]);
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
    changeSearch,
    suggestions,
  };
};
export default useFetchWeather;
