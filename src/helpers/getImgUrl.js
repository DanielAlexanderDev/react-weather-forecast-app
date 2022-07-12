import img22 from "../../assets/22.jpg";
import img24 from "../../assets/24.jpg";
import img25 from "../../assets/25.jpg";
import img3375 from "../../assets/3375.jpg";

export const getImgUrl = (forecast) => {
  const isDay = forecast.currentLocation.isDay === 1;
  const isRaining = forecast.currentLocation.condition.text.includes("rain");
  console.log(img22);
  if (isDay) {
    if (isRaining) {
      return img22;
    } else {
      return img24;
    }
  } else if (isRaining) {
    return img3375;
  } else {
    return img25;
  }
};
