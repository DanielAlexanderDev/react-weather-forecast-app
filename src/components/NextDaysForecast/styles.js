import styled from "styled-components";

export const DaysContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
`;

export const DayCard = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin: 20px 20px;
  color: white;
`;
