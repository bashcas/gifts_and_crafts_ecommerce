import React from "react"
import styled from "styled-components"
import instagram from "../assets/instagram.png"
import whatsapp from "../assets/whatsapp.png"
import tiktok from "../assets/tik-tok.png"

const P = styled.p`
  font-size: clamp(var(--xs), 3vw, var(--s));
  cursor: pointer;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const Image = styled.img`
  width: clamp(17px, 3vw, 24px);
  cursor: pointer;
`

const Contact = () => {
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "7em",
        gap: "5px",
      }}
    >
      <Container>
        <Image src={instagram} alt="Instagram logo" /> <P>Instagram</P>
      </Container>
      <Container>
        <Image src={whatsapp} alt="Whatsapp logo" /> <P>Whatsapp</P>
      </Container>
      <Container>
        <Image src={tiktok} alt="Tiktok logo" /> <P>Tik-Tok</P>
      </Container>
    </div>
  )
}

export default Contact
