export const getImgUrl = (forecast) => {
  const isDay = forecast.currentLocation.isDay === 1;
  const isRaining = forecast.currentLocation.condition.text.includes("rain");
  if (isDay) {
    if (isRaining) {
      return "src/assets/22.jpg";
    } else {
      return "src/assets/24.jpg";
    }
  } else if (isRaining) {
    return "src/assets/3375.jpg";
  } else {
    return "src/assets/25.jpg";
  }
};
