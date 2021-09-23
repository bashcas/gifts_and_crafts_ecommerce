import React, { useRef, useState } from "react"
import styled from "styled-components"
import { COLORS, SIZES } from "../constants"
import { ReactComponent as Menu } from "../assets/menu.svg"
import { ReactComponent as User } from "../assets/user.svg"
import { ReactComponent as Heart } from "../assets/heart.svg"
import { ReactComponent as Bag } from "../assets/bag.svg"
import logo from "../assets/logo.png"
import useWindowSize from "../hooks/useWindowSize"
import Input from "../styled-components/Input"
import { Link } from "react-router-dom"

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
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 0.25em 1em;
  width: 100%;
  &::placeholder {
    color: ${COLORS.gray};
  }
  &:focus {
    -webkit-box-shadow: 0px 0px 3px 0px rgba(0, 132, 255, 1);
    -moz-box-shadow: 0px 0px 3px 0px rgba(0, 132, 255, 1);
    box-shadow: 0px 0px 3px 0px rgba(0, 132, 255, 1);
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
    transform: scale(1.3);
  }
  &:hover > g > path {
    fill: ${COLORS.darkGray};
    transition: fill 0.1s ease-in;
  }
`

const SVGHeart = styled(Heart)`
  cursor: pointer;
  @media (min-width: 768px) {
    transform: scale(1.3);
  }
  &:hover > path {
    fill: ${COLORS.darkGray};
    transition: fill 0.1s ease-in;
  }
`

const SVGBag = styled(Bag)`
  cursor: pointer;
  @media (min-width: 768px) {
    transform: scale(1.3);
  }
  &:hover > path {
    fill: ${COLORS.darkGray};
    transition: fill 0.1s ease-in;
  }
`
const SVGIconContainer = styled.div`
  height: 30px;
  display: grid;
  place-content: center;
`

const LoginModal = styled.div`
  position: absolute;
  background-color: #ffffff;
  padding: 20px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  gap: 20px;
  top: calc(100% + 1rem);
  right: 0;
  opacity: 0;
  border-radius: 10px;
  pointer-events: none;
  transform: translateY(-10px);
  transition: transform 150ms ease-in-out, opacity 150ms ease-in-out;
  s & > p {
    font-size: ${SIZES.xs};
  }
`

const Header = () => {
  const { width } = useWindowSize()
  const [isMobile] = useState(width <= 768)
  const loginModalRef = useRef(null)

  const handleMouseClickOnUserIcon = () => {
    if (loginModalRef.current.style.pointerEvents === "auto") {
      loginModalRef.current.style.pointerEvents = "none"
      loginModalRef.current.style.transform = "translateY(-10px)"
      loginModalRef.current.style.opacity = "0"
    } else {
      loginModalRef.current.style.transform = "translateY(0)"
      loginModalRef.current.style.opacity = "1"
      loginModalRef.current.style.pointerEvents = "auto"
    }
  }
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
        <FlexContainer
          gap={isMobile ? "5px" : "10px"}
          style={{ position: "relative" }}
        >
          <SVGIconContainer>
            <SVGUser
              title="Login into your costumer account"
              onClick={handleMouseClickOnUserIcon}
            />
          </SVGIconContainer>

          <StyledSpan>|</StyledSpan>
          <SVGIconContainer>
            <Link to="/favorites">
              <div style={{ height: "17px" }}>
                <SVGHeart title="Favorite products" />
              </div>
            </Link>
          </SVGIconContainer>

          <StyledSpan>|</StyledSpan>
          <SVGIconContainer>
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <FlexContainer gap={isMobile ? "3px" : "6px"}>
                <SVGBag />
                <StyledCounter>0</StyledCounter>
              </FlexContainer>
            </Link>
          </SVGIconContainer>

          <LoginModal ref={loginModalRef}>
            <Link to="/login">
              <Input
                type="button"
                value="Iniciar Sesión"
                padding="0.5em 7em"
                bgColor={COLORS.darkGray}
                fontColor={"#CECECE"}
                hover
                title="Log in to your costumer account"
              />
            </Link>

            <hr />
            <p style={{ fontSize: SIZES.xs }}>¿No tienes cuenta aún?</p>
            <Link to="/register">
              <Input
                type="button"
                value="Regístrate"
                padding="0.5em 7em"
                bgColor={COLORS.darkGray}
                fontColor={"#CECECE"}
                hover
                title="Register"
              />
            </Link>
          </LoginModal>
        </FlexContainer>
      </StyledHeaderContent>
    </StyledHeader>
  )
}

export default Header
