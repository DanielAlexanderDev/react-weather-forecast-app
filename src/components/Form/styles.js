import styled, { css } from "styled-components";

export const FormContainer = styled.form`
  position: relative;
  margin-top: 30px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  height: 50px;
  border-style: none;
  padding: 10px;
  font-size: 18px;
  letter-spacing: 2px;
  padding-right: 40px;
  outline: none;
  color: #fff;
  width: 300px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  margin-bottom: 10px;
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

export const Select = styled.div`
  cursor: pointer;
  position: absolute;
  margin-top: 60px;
  width: 300px;
  background-color: #f2f2f2;
  overflow: hidden;
  height: auto;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Option = styled.p`
  height: auto;
  font-size: 1.1rem;
  padding: 10px;
  :hover {
    background-color: #1a1c23;
    color: #fff;
  }
`;
