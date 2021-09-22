import React, { useState } from "react"
import { items } from "../mocks/carouselItems"
import useWindowSize from "../hooks/useWindowSize"
import { SIZES, COLORS } from "../constants"
import Product from "../components/Product"
import styled from "styled-components"
import Carousel from "react-elastic-carousel"
import "../assets/css/react-elastic-carousel.css"
import eyeImage from "../assets/eye.png"

const H2 = styled.h2`
  font-size: ${SIZES.xl};
  margin-bottom: 20px;
  @media (min-width: 768px) {
    font-size: ${SIZES.xxl};
  }
`

const Section = styled.section`
  margin-top: 50px;
`

const SeeMore = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-decoration: none;
  gap: 10px;
  font-size: ${SIZES.xs};
  color: ${COLORS.main};
`

const HR = styled.hr`
  margin-top: 20px;
`

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
]

const HomeScreen = () => {
  const [products] = useState({
    cajas: [...items.filter((item) => item.category === "Cajas")],
    anchetas: [...items.filter((item) => item.category === "Anchetas")],
    globos: [...items.filter((item) => item.category === "Globos")],
    cartas: [...items.filter((item) => item.category === "Cartas")],
  })

  const { width } = useWindowSize()

  return (
    <div>
      <Section>
        <H2>Cajas Dulceras</H2>
        <Carousel
          breakPoints={breakPoints}
          showArrows={width > 480 ? true : false}
        >
          {products.cajas.map(
            (item) =>
              item.category === "Cajas" && (
                <Product
                  key={item._id}
                  _id={item._id}
                  image={item.image}
                  name={item.name}
                  description={item.description}
                  category={item.category}
                  price={item.price}
                  rating={item.rating}
                  numReviews={item.numReviews}
                />
              )
          )}
        </Carousel>
        <SeeMore href="/cajas">
          <img src={eyeImage} alt="see more" />
          <span style={{ color: COLORS.main }}>Ver más...</span>
        </SeeMore>
      </Section>
      <HR />
      <Section>
        <H2>Anchetas</H2>
        <Carousel
          breakPoints={breakPoints}
          showArrows={width > 480 ? true : false}
        >
          {products.anchetas.map(
            (item) =>
              item.category === "Anchetas" && (
                <Product
                  key={item._id}
                  image={item.image}
                  name={item.name}
                  description={item.description}
                  category={item.category}
                  price={item.price}
                  rating={item.rating}
                  numReviews={item.numReviews}
                />
              )
          )}
        </Carousel>
      </Section>
      <HR />
      <Section>
        <H2>Globos Burbuja</H2>
        <Carousel
          breakPoints={breakPoints}
          showArrows={width > 480 ? true : false}
        >
          {products.globos.map(
            (item) =>
              item.category === "Globos" && (
                <Product
                  key={item._id}
                  image={item.image}
                  name={item.name}
                  description={item.description}
                  category={item.category}
                  price={item.price}
                  rating={item.rating}
                  numReviews={item.numReviews}
                />
              )
          )}
        </Carousel>
      </Section>
      <HR />
      <Section>
        <H2>Cartas</H2>
        <Carousel
          breakPoints={breakPoints}
          showArrows={width > 480 ? true : false}
        >
          {products.cartas.map(
            (item) =>
              item.category === "Cartas" && (
                <Product
                  key={item._id}
                  image={item.image}
                  name={item.name}
                  description={item.description}
                  category={item.category}
                  price={item.price}
                  rating={item.rating}
                  numReviews={item.numReviews}
                />
              )
          )}
        </Carousel>
      </Section>
    </div>
  )
}

export default HomeScreen
