import styled from "styled-components";
import { Body } from "../../globalStyles"

export const BodyPage = styled(Body)`
  position: relative;
`

export const HeaderList = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 5px;
  margin: 0px 5px 5px 5px;
  padding: 15px;
  color: #333;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  p {
    margin: auto;
    padding: 5px 0px 0px 0px;
    display: 'inline'
  }
`
export const Total = styled.p`
  position: absolute;
  border-radius: 5px;
  padding: 15px;
  margin-top: 10px;
  color: #ffffff;
	text-shadow:0px 1px 0px #b23e35;
  background: #d65a4f;
  box-shadow:inset 0px 5px 5px 0px #ad3232, inset 0px -30px 10px -5px #ad3232;
  right: 10px;
`
export const MensageDefault = styled.h1`
  text-align: center;
  padding: 20px;
  color: #3535;
`