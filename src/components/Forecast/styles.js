import styled from "styled-components";

export const ForecastContainer = styled.div`
  width: 90%;
  max-width: 900px;
  min-width: 320px;
  height: auto;
  border-radius: 10px;
  box-shadow: 3px 4px 5px 3px rgba(0, 0, 0, 0.62);
  -webkit-box-shadow: 3px 4px 5px 3px rgba(0, 0, 0, 0.62);
  -moz-box-shadow: 3px 4px 5px 3px rgba(0, 0, 0, 0.62);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
`;

export const SemiContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-width: 200px;
  min-height: 380px;
  max-height: auto;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  object-fit: contain;
  background-size: cover;
  color: white;
`;

export const HeroImg = styled.img`
  width: inherit;
  min-width: 360px;
  position: absolute;
  z-index: -1;
  height: inherit;
  object-fit: cover;
`;
