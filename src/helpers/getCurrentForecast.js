const getCurrentForecast = (data) => [
  {
    name: "Humidity",
    value: data.current.humidity,
    unit: "%",
  },
  {
    name: "Feels Like",
    value: data.current.feelslike_c,
    unit: "°C",
  },
  {
    name: "Wind",
    value: data.current.wind_kph,
    unit: "km/h",
  },
  {
    name: "Last Updated",
    value: data.current.last_updated.slice(11),
    unit: "",
  },
];

export default getCurrentForecast;
