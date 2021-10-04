import React from "react"
import styled from "styled-components"
import RealCheckbox from "./RealCheckbox"

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 10px;
  @media (min-width: 1140px) {
    margin-top: 15px;
  }
`

const ListItem = styled.li`
  font-size: var(--xxs);
  display: flex;
  align-items: center;
  gap: 15px;
  @media (min-width: 1140px) {
    font-size: var(--xs);
  }
`

const Relleno = ({ options }) => {
  return (
    <Container>
      {options.map((option) => (
        <ListItem key={option.name}>
          <RealCheckbox
            name={option.name}
            id={option.name}
            label={option.name}
          />
        </ListItem>
      ))}
    </Container>
  )
}

export default Relleno
