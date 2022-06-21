import React from "react";
import { MainTitle } from "./styles";
import { MdLocationOn } from "react-icons/md";

const style = { color: "#6BF3E7", fontSize: "1.5em" };

const Header = () => {
  return (
    <>
      <MainTitle>
        <MdLocationOn style={style} />
        <span>Weather</span>
        <strong>Forecast</strong>
      </MainTitle>
    </>
  );
};

export default Header;
