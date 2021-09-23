import React from "react"
import { ReactComponent as Gift } from "../assets/gift.svg"
import useWindowSize from "../hooks/useWindowSize"
import styled from "styled-components"
import { COLORS, SIZES } from "../constants"
import Input from "../styled-components/Input"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  grid-column-start: 10;
  grid-column-end: -1;
`

const FooterStyled = styled.footer`
  background-color: ${COLORS.headerBg};
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  padding: 5em;
  gap: 10px;
  margin-top: 30px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const H3 = styled.h3`
  font-size: clamp(${SIZES.s}, 5vw, ${SIZES.xxl});
  text-align: center;
  color: ${COLORS.darkGray};
`

const P = styled.p`
  font-size: ${SIZES.xs};
  text-align: center;
  font-weight: 400;
`

const TitleContainer = styled.div`
  max-width: 500px;
  grid-column-start: 5;
  grid-column-end: 9;
`

const Footer = () => {
  const { width } = useWindowSize()

  return (
    <FooterStyled>
      {width > 768 && (
        <Gift
          style={{
            gridColumnStart: "1",
            gridColumnEnd: "4",
          }}
        />
      )}
      <TitleContainer>
        <H3>¡Haz parte de nuestra comunidad!</H3>
        {width > 768 && (
          <P>
            Suscríbete a nuestro Newsletter y recibe un 15%OFF en tu primera
            compra
          </P>
        )}
      </TitleContainer>
      <Form>
        <Input type="text" placeholder="Nombre" />
        <Input type="email" placeholder="Email" />
        <Input
          bgColor={COLORS.darkGray}
          fontColor={"#CECECE"}
          type="submit"
          value="Suscribirse"
          hover
        />
      </Form>
    </FooterStyled>
  )
}

export default Footer
