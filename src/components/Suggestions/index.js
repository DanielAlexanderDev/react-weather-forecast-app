import styled from "styled-components";

export const SuggestionContainer = styled.div`
  margin: 0 auto;
  position: absolute;
  left: calc(50% - 170px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  background-color: #2e303e;
  width: 50%;
  max-width: 350px;
  min-width: 340px;
`;

export const SuggestionText = styled.p`
  padding-top: 10px;
  padding-left: 10px;
  cursor: pointer;
  justify-self: center;
  height: 40px;
  color: white;
  &:hover {
    background-color: white;
    color: black;
  }
`;
