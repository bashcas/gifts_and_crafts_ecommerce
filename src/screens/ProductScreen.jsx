import React, { useEffect, useState } from "react"
import useWindowSize from "../hooks/useWindowSize"
import { emitCustomEvent, useCustomEventListener } from "react-custom-events"
import { items } from "../mocks/carouselItems"
import styled from "styled-components"
import { COLORS, SIZES } from "../constants"
import Rating from "../components/Rating"
import CustomCarousel from "../components/CustomCarousel"
import Modal from "../components/Modal"
import Relleno from "../components/Relleno"

const Container = styled.div`
  display: grid;
  column-gap: 30px;
  grid-template-columns: 100%;
  max-width: 1260px;
  margin: 0 auto;
  @media (min-width: 1140px) {
    grid-template-columns: 50% 50%;
  }
`

const ImageContainer = styled.div`
  width: 90vw;
  max-width: 520px;
  margin: 0 auto;
  & > img {
    width: 100%;
    object-fit: cover;
    border-radius: 6px;
  }
  @media (min-width: 1140px) {
    margin: 0;
    grid-column-start: 1;
    grid-row-start: 2;
    grid-row-end: 10;
    width: 100%;
    max-width: initial;
  }
`

const GoBack = styled.button`
  display: block;
  max-width: 520px;
  width: 100%;
  margin: 0 auto 20px auto;
  color: var(--darkGray);
  font-size: var(--xs);
  cursor: pointer;
  padding: 5px 10px;
  background-color: var(--xlightGray);
  color: var(--darkGray);
  outline: none;
  border: none;
  transition: all 150ms;
  &:hover {
    background-color: var(--lightGray);
  }
  @media (min-width: 1140px) {
    grid-column-start: 1;
    grid-row-start: 1;
    margin: 0 0 20px 0;
  }
`

const Name = styled.h3`
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
  font-size: var(--s);
  line-height: 30px;
  @media (min-width: 1140px) {
    font-size: var(--m);
    grid-column-start: 2;
    grid-row-start: 2;
    margin: 0;
  }
`

const OtherProductsTitle = styled.h4`
  margin-top: 7em;
  margin-bottom: 20px;
  font-size: var(--xs);
  @media (min-width: 1140px) {
    grid-column-start: 1;
    grid-row-start: 8;
  }
`

const OptionsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 1140px) {
    margin: 0;
    grid-column-start: 2;
    grid-row-start: 5;
    gap: 25px;
  }
`

const Option = styled.div`
  position: relative;
  max-width: 520px;
  margin: 0 auto;
  width: 100%;
  background-color: var(--xlightGray);
  padding: 1em;
  font-size: var(--xs);
  border-radius: 6px;
  cursor: pointer;
  & > p {
    display: inline;
  }
  &:after {
    color: var(--blue);
    font-size: var(--l);
    content: ">";
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (min-width: 1140px) {
    margin: 0;
    padding: 0;
    background-color: initial;
    &:after {
      content: "";
    }
    cursor: initial;
  }
`

const Price = styled.p`
  font-size: ${SIZES.xxl};
  width: 100%;
  max-width: 520px;
  margin: 15px auto;
  @media (min-width: 1140px) {
    grid-column-start: 2;
    grid-row-start: 6;
    margin: 15px 0 15px 0;
  }
`

const OptionName = styled.h5`
  font-size: var(--xs);
  @media (min-width: 1140px) {
    margin-top: 15px;
  }
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ gap }) => gap || "0px"};
  margin-top: ${({ marginTop }) => marginTop || "0px"};
  @media (min-width: 1140px) {
    grid-column-start: 2;
    grid-row-start: 7;
    align-items: flex-start;
  }
`

const FlexContainerList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${(props) => props.gap || "0px"};
  margin: ${({ margin }) => margin};
  list-style: none;
`

const Size = styled.li`
  font-size: var(--s);
  background-color: #eeeeee;
  padding: 8px 14px;
  cursor: pointer;
  transition: all 150ms;
  &:hover {
    box-shadow: 0 0 0 1px var(--blue);
  }
`

const Button = styled.button`
  border-radius: 6px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
  border: none;
  outline: none;
  padding: 1em;
  font-size: var(--xs);
  cursor: pointer;
  transition: all 150ms;
  &:hover {
    background-color: ${({ bgColorHover }) => bgColorHover};
  }
  @media (min-width: 1140px) {
    margin: 0;
  }
`

const Description = styled.p`
  font-size: ${SIZES.xxs};
  max-width: 520px;
  padding: 0 0.5em;
  margin: 15px auto 0 auto;
  @media (min-width: 1140px) {
    margin: 1.2em 0;
    padding: 0;
    grid-row-start: 4;
    grid-column-start: 2;
  }
`

const StyledRating = styled(Rating)`
  width: 100%;
  max-width: 520px;
  margin: 20px auto;
  margin-top: 0;
  @media (min-width: 1140px) {
    margin: 0;
    grid-area: 3 / 2 / 4 / -1;
  }
`

const CustomCarouselExtend = styled(CustomCarousel)`
  @media (min-width: 1140px) {
    grid-area: 9 / 1 / 10 / 3;
  }
`

const ProductScreen = ({ match, history }) => {
  const [size, setSize] = useState(null)
  const [relleno, setRelleno] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { width } = useWindowSize()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const handleClickOnOption = () => {
    if (width < 1140) {
      setIsModalOpen(true)
      emitCustomEvent("modal-open")
    }
  }

  const handleClickOnSize = (e) => {
    if (e.target.tagName === "LI") {
      e.target.parentElement.childNodes.forEach((li) => {
        li.style.color = COLORS.gray
        li.style.backgroundColor = COLORS.lightGray
      })
      setSize(e.target.innerText)
      e.target.style.color = "#fff"
      e.target.style.backgroundColor = COLORS.blue
    }
  }

  useCustomEventListener("modal-closed", () => {
    setIsModalOpen(false)
  })

  useCustomEventListener("relleno-added", (data) => {
    setRelleno((prevState) => [...prevState, data.relleno])
  })

  useCustomEventListener("relleno-removed", (data) => {
    setRelleno((prevState) => {
      const newState = [...prevState]
      const index = newState.indexOf(data.relleno)
      if (index > -1) newState.splice(index, 1)
      return newState
    })
  })

  const product = items.find((item) => item._id === match.params.id)
  return (
    <>
      <Container>
        <GoBack onClick={history.goBack}>Volver</GoBack>
        <Name>{product.name}</Name>
        <StyledRating
          width="17px"
          value={product.rating}
          text={`${product.numReviews} opiniones`}
        />

        <ImageContainer>
          <img src={product.image} alt={product.alt} />
        </ImageContainer>
        {product.description && (
          <Description>{product.description}</Description>
        )}
        <OptionsContainer>
          {product.sizeOptions && (
            <Option onClick={handleClickOnOption}>
              <p>Tamaño: </p>
              <strong>
                {size === null ? "Por favor, elige una opción" : size}
              </strong>
              {width >= 1140 && (
                <FlexContainerList
                  gap={"15px"}
                  onClick={handleClickOnSize}
                  margin="15px 0 0 0"
                >
                  {product.sizeOptions.map((size) => (
                    <Size key={`size-${size}`}>{size}</Size>
                  ))}
                  <p style={{ fontSize: SIZES.xxs, color: COLORS.blue }}>
                    Guía de tamaños
                  </p>
                </FlexContainerList>
              )}
            </Option>
          )}
          {product.rellenoOptions && (
            <Option onClick={handleClickOnOption}>
              <p>Relleno: </p>
              <strong>
                {relleno.length > 0
                  ? relleno.join(", ")
                  : "Por favor, elige una opción"}
              </strong>
              {width >= 1140 && <Relleno options={product.rellenoOptions} />}
            </Option>
          )}
        </OptionsContainer>

        <Price>$ {product.price}</Price>
        <FlexContainer gap={"5px"} marginTop={"10px"}>
          <Button
            bgColor={COLORS.blue}
            color={"#fff"}
            bgColorHover={`${COLORS.blueHover}`}
          >
            Comprar
          </Button>
          <Button
            bgColor={`rgba(${COLORS.blueRgb}, 0.15)`}
            color={COLORS.blue}
            bgColorHover={`rgba(${COLORS.blueRgb}, 0.25)`}
          >
            Agregar al carrito
          </Button>
        </FlexContainer>

        <OtherProductsTitle>Otros productos similares</OtherProductsTitle>
        <CustomCarouselExtend
          products={items.filter(
            (item) =>
              item.category === product.category && item._id !== product._id
          )}
        ></CustomCarouselExtend>
      </Container>
      {width < 1140 && (
        <Modal open={isModalOpen}>
          <OptionName>Tamaño:</OptionName>
          <FlexContainerList gap={"15px"} onClick={handleClickOnSize}>
            {product.sizeOptions &&
              product.sizeOptions.map((size) => (
                <Size key={`size-${size}`}>{size}</Size>
              ))}
          </FlexContainerList>
          <p style={{ fontSize: SIZES.xxs, color: COLORS.blue }}>
            Guía de tamaños
          </p>
          {product.rellenoOptions && (
            <>
              <OptionName>Relleno:</OptionName>{" "}
              <Relleno options={product.rellenoOptions} />
            </>
          )}
        </Modal>
      )}
    </>
  )
}

export default ProductScreen
