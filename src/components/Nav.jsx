import React from "react"
import styled from "styled-components"
import { Link, useLocation } from "react-router-dom"
import { COLORS } from "../constants"

const NavStyled = styled.nav`
  display: none;
  background-color: var(--main);
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
  display: flex;
  transition: background-color 100ms ease-in;
  cursor: pointer;
  &:hover {
    background-color: var(--main-hover);
  }
`

const LinkStyled = styled(Link)`
  font-size: var(--xs);
  width: 100%;
  text-align: center;
  text-decoration: none;
  padding: 0.5em 0;
  color: var(--gray);
  transition: all 100ms;
  transition: color 100ms ease-in;
  &:hover {
    color: var(--darkGray);
  }
`

const Nav = () => {
  const location = useLocation()
  const isSection =
    location.pathname === "/cajas" ||
    location.pathname === "/anchetas" ||
    location.pathname === "/globos" ||
    location.pathname === "/cartas" ||
    location.pathname === "/"

  const handleClickOnSection = (e) => {
    const li = e.target.parentElement
    if (li.tagName === "LI") {
      li.parentElement.childNodes.forEach((liEl) => {
        liEl.style.backgroundColor = COLORS.main
      })
      li.style.backgroundColor = COLORS.lightGray
    }
  }
  return isSection ? (
    <NavStyled>
      <StyledList onClick={handleClickOnSection}>
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
  ) : (
    ""
  )
}

export default Nav
