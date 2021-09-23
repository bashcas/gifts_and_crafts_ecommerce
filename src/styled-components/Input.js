import { COLORS } from "../constants"
import styled from "styled-components"

const Input = styled.input`
  color: ${(props) => props.fontColor || COLORS.xlightGray};
  &::placeholder {
    color: ${(props) => props.fontColor || COLORS.xlightGray};
  }
  padding: ${(props) => props.padding || "0.5em 1.6em"};
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: ${(props) => props.bgColor || "#fff"};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.hover ? COLORS.gray : "")};
  }
`

export default Input
