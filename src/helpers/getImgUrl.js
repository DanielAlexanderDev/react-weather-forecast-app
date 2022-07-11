export const getImgUrl = (forecast) => {
  const isDay = forecast.currentLocation.isDay === 1;
  const isRaining = forecast.currentLocation.condition.text.includes("rain");
  if (isDay) {
    if (isRaining) {
      return "assets/22.jpg";
    } else {
      return "assets/24.jpg";
    }
  } else if (isRaining) {
    return "assets/3375.jpg";
  } else {
    return "assets/25.jpg";
  }
};
