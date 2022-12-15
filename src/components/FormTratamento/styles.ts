import styled from "styled-components";


export const InputValue = styled.input.attrs({ type: "number" })`
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
  &:focus {
    outline: 0;
  }

  // For Mozilla
  -moz-appearance: textfield;
  appearance: textfield;
  margin: 0;

  // For Chrome
  &::-webkit-inner-spin-button {
    -webkit-appearance: none; 
  }
`
export const InputPg = styled.input.attrs({ type: "radio" })`
  padding: 5px 10px;
  margin-right: 10px;
`