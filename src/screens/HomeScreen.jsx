import React, { useState } from "react"
import { items } from "../mocks/carouselItems"
import styled from "styled-components"
import SeeMore from "../components/SeeMore"
import CustomCarousel from "../components/CustomCarousel"

const H2 = styled.h2`
  font-size: var(--xl);
  margin-bottom: 20px;
  @media (min-width: 768px) {
    font-size: var(--xxl);
  }
`

const Section = styled.section`
  margin-top: 50px;
`

const HR = styled.hr`
  margin-top: 20px;
`

const HomeScreen = () => {
  const [products] = useState({
    cajas: [...items.filter((item) => item.category === "Cajas")],
    anchetas: [...items.filter((item) => item.category === "Anchetas")],
    globos: [...items.filter((item) => item.category === "Globos")],
    cartas: [...items.filter((item) => item.category === "Cartas")],
  })

  return (
    <div>
      <Section>
        <H2>Cajas Dulceras</H2>
        <CustomCarousel products={products.cajas}></CustomCarousel>
        <SeeMore to="/cajas"></SeeMore>
      </Section>
      <HR />
      <Section>
        <H2>Anchetas</H2>
        <CustomCarousel products={products.anchetas}></CustomCarousel>
        <SeeMore to="/anchetas"></SeeMore>
      </Section>
      <HR />
      <Section>
        <H2>Globos Burbuja</H2>
        <CustomCarousel products={products.globos}></CustomCarousel>
        <SeeMore to="/globos"></SeeMore>
      </Section>
      <HR />
      <Section>
        <H2>Cartas</H2>
        <CustomCarousel products={products.cartas}></CustomCarousel>
        <SeeMore to="/cartas"></SeeMore>
      </Section>
    </div>
  )
}

export default HomeScreen
