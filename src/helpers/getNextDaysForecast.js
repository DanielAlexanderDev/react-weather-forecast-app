const getNextDaysForecast = (data) =>
  data.forecast.forecastday.map((day) => ({
    day: day.date,
    maxTemp: `${day.day.maxtemp_c} °C`,
    minTemp: `${day.day.mintemp_c} °C`,
    condition: day.day.condition.text,
    avgHumidity: `${day.day.avghumidity} %`,
    sunrise: day.astro.sunrise,
    sunset: day.astro.sunset,
  }));

export default getNextDaysForecast;
