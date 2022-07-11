import styled, { css } from "styled-components";

export const Title = styled.h1`
  font-weight: 900;
  font-size: 2rem;
  margin-bottom: 5px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  min-width: 300px;
  max-width: 360px;
  min-height: 300px;
  max-height: 500px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  color: black;
  padding: 15px;
`;

export const Description = styled.p`
  font-weight: 300;
  margin-bottom: 10px;
  text-align: right;
  ${(props) =>
    props.temperature &&
    css`
      font-size: 3.2rem;
      font-weight: 500;
      margin-right: 5px;
    `}
  ${(props) =>
    props.country &&
    css`
      margin-bottom: 20px;
      text-align: center;
    `}
`;
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.right &&
    css`
      flex-direction: column;
      align-items: flex-end;
    `}
`;
export const Image = styled.img`
  width: 50px;
  justify-items: flex-end;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
