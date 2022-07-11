const getCurrentLocation = (data) => ({
  name: data.location.name,
  country: data.location.country,
  localTime: data.location.localtime.slice(11),
  localDate: new Date(data.location.localtime.slice(0, 10)).toLocaleDateString(
    "en-us",
    {
      weekday: "long",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    }
  ),
  isDay: data.current.is_day,
  condition: {
    text: data.current.condition.text,
    iconUrl: data.current.condition.icon,
  },
  temperature: data.current.temp_c,
});

export default getCurrentLocation;
