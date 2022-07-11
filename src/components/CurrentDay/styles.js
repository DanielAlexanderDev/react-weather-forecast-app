import styled from "styled-components";

export const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-content: center;
  padding: 20px;
  width: 60%;
  min-width: 300px;
  row-gap: 50px;
  max-width: 360px;
  max-height: 300px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Name = styled.h3`
  justify-self: left;
`;

export const Description = styled.p`
  justify-self: right;
`;
