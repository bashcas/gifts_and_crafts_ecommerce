import React, { useState } from "react"
import styled from "styled-components"
import { COLORS, SIZES } from "../constants"
import { ReactComponent as Menu } from "../assets/menu.svg"
import { ReactComponent as User } from "../assets/user.svg"
import { ReactComponent as Heart } from "../assets/heart.svg"
import { ReactComponent as Bag } from "../assets/bag.svg"
import logo from "../assets/logo.png"
import useWindowSize from "../hooks/useWindowSize"

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => props.gap || "0px"};
`

const StyledHeader = styled.header`
  background-color: ${COLORS.headerBg};
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2em;
  @media (min-width: 768px) {
    height: 65px;
  }
`

const StyledHeaderContent = styled(FlexContainer)`
  max-width: 1300px;
  width: 100%;
  gap: 12px;
`

const StyledSearch = styled.input`
  font-size: ${SIZES.xs};
  background-color: ${COLORS.lightGray};
  border-radius: 20px;
  border: none;
  outline: none;
  padding: 0.25em 1em;
  width: 100%;
  &::placeholder {
    color: ${COLORS.gray};
  }
  @media (min-width: 768px) {
    font-size: ${SIZES.s};
  }
`

const StyledSearchContainer = styled.div`
  display: inline-block;
  max-width: 1300px;
  flex: 1 1;
`

const StyledSpan = styled.span`
  font-size: ${SIZES.s};
  @media (min-width: 768px) {
    font-size: ${SIZES.s};
  }
`

const StyledCounter = styled.div`
  font-size: ${SIZES.s};
  @media (min-width: 768px) {
    font-size: ${SIZES.s};
  }
`

const Logo = styled.img`
  width: 24px;
  height: 24px;
  @media (min-width: 768px) {
    width: 45px;
    height: 45px;
  }
`

const SVGUser = styled(User)`
  cursor: pointer;
  @media (min-width: 768px) {
    transform: scale(1.4);
  }
`

const SVGHeart = styled(Heart)`
  cursor: pointer;
  @media (min-width: 768px) {
    transform: scale(1.4);
  }
`

const SVGBag = styled(Bag)`
  cursor: pointer;
  @media (min-width: 768px) {
    transform: scale(1.4);
  }
`

const Header = () => {
  const { width } = useWindowSize()
  const [isMobile] = useState(width <= 768)

  return (
    <StyledHeader>
      <StyledHeaderContent>
        {isMobile ? (
          <FlexContainer>
            <Menu />
          </FlexContainer>
        ) : (
          ""
        )}
        <Logo src={logo} alt="Logo" />
        <StyledSearchContainer>
          <StyledSearch placeholder="Buscar..." />
        </StyledSearchContainer>
        <FlexContainer gap={isMobile ? "5px" : "10px"}>
          <SVGUser />
          <StyledSpan>|</StyledSpan>
          <SVGHeart />
          <StyledSpan>|</StyledSpan>
          <FlexContainer gap={isMobile ? "3px" : "6px"}>
            <SVGBag />
            <StyledCounter>0</StyledCounter>
          </FlexContainer>
        </FlexContainer>
      </StyledHeaderContent>
    </StyledHeader>
  )
}

export default Header
