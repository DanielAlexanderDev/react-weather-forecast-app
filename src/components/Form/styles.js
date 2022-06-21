import styled from "styled-components";

export const FormContainer = styled.form`
  position: relative;
  margin-top: 30px;
  margin-bottom: 100px;
`;

export const Input = styled.input`
  height: 50px;
  border-style: none;
  padding: 10px;
  font-size: 18px;
  letter-spacing: 2px;
  outline: none;
  padding-right: 40px;
  color: #fff;
  width: 300px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border-style: none;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  right: 0px;
  color: #ffffff;
  background-color: transparent;
  pointer-events: painted;
`;
