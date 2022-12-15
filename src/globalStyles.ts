import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  body {
    backgroud: #f5f5f5;
    font-size:15px;
    color: #ffffff;
  }
`
export const Container = styled.div`
  max-width: 1024px;
  margin: auto;
`
export const Body = styled.section`
  max-width: 800px;
  margin: auto;
  padding: 1px 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;
`

export const Field = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px 0;
  padding 5px;
  border: solid 2px #fff;
  border-radius: 5px;
`
export const TitleForm = styled.h1`
  padding: 0px 5px;
`

export const ContainerInput = styled.div`
  margin: 10px;
  width: 250px;
  display:flex;
  flex-direction: column;
`

export const Label = styled.label`
  padding: 5px;
  color: #ffffff;
	cursor:pointer;
	text-shadow:0px 1px 0px #b23e35;
`
export const ContainerForm = styled.div`
  position: relative;
  margin: 5px;
  padding: 5px 20px;
  background: #840914;
  border-radius: 5px;
  box-shadow:inset 0px 30px 24px 0px #ad3232, inset 0px -30px 24px -10px #ad3232; 
`
export const InputDate = styled.input.attrs({ type: "date", required: true })`
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
  position: relative;
  text-align: center;

  &:focus {
    outline: 0;
  }
  &::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    height: auto;
    color: transparent;
    background: transparent;
    cursor: pointer;
  }
`
export const InputName = styled.input.attrs({ type: "text" })`
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
  &:focus {
    outline: 0;
  }
`

export const ContainerButoons = styled.div`
  display: flex;
  width: 300px;
  flex-grow: 1;
  justify-content: space-around;
  margin: 20px 0;
  `
export const Button = styled.button`
  box-shadow:inset 0px 39px 5px -24px #e67a73;
	background-color:#e4685d;
	border-radius: 5px;
  border: none;
	cursor:pointer;
	color:#ffffff;
  padding: 10px 40px;
	text-shadow:0px 1px 0px #b23e35;
  &:active {
    position:relative;
	  top:1px;
  }
`
export const MensageForm = styled.p`
  position: absolute;
  top: 0;
  padding: 15px;
`

export default (GlobalStyle)