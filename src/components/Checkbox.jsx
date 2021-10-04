import React from "react"
import styled from "styled-components"
import { COLORS } from "../constants"

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  padding: 1px;
  background: ${(props) => (props.checked ? COLORS.blue : COLORS.xlightGray)};
  border-radius: 50%;
  transition: all 150ms;

  ${HiddenCheckbox}:hover + & {
    box-shadow: 0 0 0 1px var(--blue);
  }
  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  cursor: not-allowed;
  @media (min-width: 768px) {
    cursor: pointer;
  }
`

const Checkbox = ({ className, checked, ...props }) => {
  return (
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  )
}

export default Checkbox
