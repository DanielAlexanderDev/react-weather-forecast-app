import styled from "styled-components";

export const DaysContainer = styled.div`
  @media screen and (max-width: 950px) {
    overflow-x: scroll;
  }
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
`;

export const DayCard = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(120px, 1fr));
  margin: 20px 20px;
  color: white;
`;

export const DayName = styled.div`
  margin: 0 15px;
  font-weight: 300;
  color: white;
`;

export const DayNameContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(120px, 1fr));
  margin: 20px 20px;
  color: white;
`;

export const Description = styled.p`
  margin: 0 15px;
  font-weight: lighter;
  min-width: 50px;
`;
