import styled from "styled-components"

export const ContainerList = styled.section`
  max-height: 250px;
  overflow-y: scroll;
  border-radius: 5px;

  &::-webkit-scrollbar {
    width: 10px;
  };

  &::-webkit-scrollbar-thumb{
    background: rgba(214, 90, 79, 0.4);
    border: solid 2px rgba(255, 255, 255);
    border-radius: 25px;
  }

  ul {
    padding-left: 5px;
  }

  li {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    border-radius: 5px;
    margin-bottom: 10px;
    color: #ffffff;
  	text-shadow:0px 1px 0px #b23e35;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    background: #d65a4f;
    box-shadow:inset 0px 5px 5px 0px #ad3232, inset 0px -30px 10px -5px #ad3232;

      p {
        // margin: auto;
        padding: 10px 0px;
      }
  }
`