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
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const SemiContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  background-image: url("assets/3375.jpg");
  object-fit: contain;
  background-size: cover;
  color: white;
`;
