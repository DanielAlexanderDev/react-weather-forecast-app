const getCurrentLocation = (data) => ({
  name: data.location.name,
  country: data.location.country,
  localTime: data.location.localtime.slice(11),
  condition: {
    text: data.current.condition.text,
    iconUrl: data.current.condition.icon,
  },
  temperature: data.current.temp_c,
});

export default getCurrentLocation;
