import React from "react"
import styled from "styled-components"
import { COLORS, SIZES } from "../constants"
import { Link } from "react-router-dom"

const NavStyled = styled.nav`
  display: none;
  background-color: ${COLORS.heroBg};
  height: 40px;
  width: 100%;
  @media (min-width: 768px) {
    display: block;
  }
`

const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  height: 100%;
`

const ListItem = styled.li`
  flex-grow: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 100ms ease-in;
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.headerBg};
  }
`

const LinkStyled = styled(Link)`
  font-size: ${SIZES.xs};
  text-decoration: none;
  transition: color 100ms ease-in;
  &:hover {
    color: ${COLORS.darkGray};
  }
`

const Nav = () => {
  return (
    <NavStyled>
      <StyledList>
        <ListItem>
          <LinkStyled to="/cajas">Cajas dulceras</LinkStyled>
        </ListItem>
        <ListItem>
          <LinkStyled to="/anchetas">Anchetas</LinkStyled>
        </ListItem>
        <ListItem>
          <LinkStyled to="/globos">Globos burbuja</LinkStyled>
        </ListItem>
        <ListItem>
          <LinkStyled to="/cartas">Cartas</LinkStyled>
        </ListItem>
      </StyledList>
    </NavStyled>
  )
}

export default Nav
