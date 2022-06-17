import axios from "axios";

const options = (param) => {
  return {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
    params: { q: param, days: "3" },
    headers: {
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
    },
  };
};

export const getWeatherRequest = async (param) => {
  const res = await axios.request(options(param));
  const data = await res.data;
  return data;
};
