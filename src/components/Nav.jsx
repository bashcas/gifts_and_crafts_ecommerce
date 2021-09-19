import React from "react"
import styled from "styled-components"
import { COLORS, SIZES } from "../constants"

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
`

const Anchor = styled.a`
  font-size: ${SIZES.xs};
  text-decoration: none;
`

const Nav = () => {
  return (
    <NavStyled>
      <StyledList>
        <ListItem>
          <Anchor href="">Cajas dulceras</Anchor>
        </ListItem>
        <ListItem>
          <Anchor href="">Anchetas</Anchor>
        </ListItem>
        <ListItem>
          <Anchor href="">Globos Burbuja</Anchor>
        </ListItem>
        <ListItem>
          <Anchor href="">Cartas</Anchor>
        </ListItem>
      </StyledList>
    </NavStyled>
  )
}

export default Nav
