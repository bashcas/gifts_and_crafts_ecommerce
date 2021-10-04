import React from "react"
import styled from "styled-components"
import { COLORS } from "../constants"
import eyeImage from "../assets/eye.png"
import { Link } from "react-router-dom"

const SeeMoreStyled = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-decoration: none;
  gap: 10px;
  font-size: var(--xs);
  color: var(--blue);
`

const SeeMore = ({ to }) => {
  return (
    <SeeMoreStyled to={to}>
      <img src={eyeImage} alt="see more" />
      <span style={{ color: COLORS.blue }}>Ver más...</span>
    </SeeMoreStyled>
  )
}

export default SeeMore
