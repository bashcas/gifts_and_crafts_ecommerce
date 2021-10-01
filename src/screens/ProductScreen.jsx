import React, { useEffect, useState } from "react"
import { emitCustomEvent, useCustomEventListener } from "react-custom-events"
import { items } from "../mocks/carouselItems"
import styled from "styled-components"
import { SIZES, COLORS } from "../constants"
import Rating from "../components/Rating"
import CustomCarousel from "../components/CustomCarousel"
import Modal from "../components/Modal"

const ImageContainer = styled.div`
  width: 90vw;
  max-width: 500px;
  & > img {
    width: 100%;
    object-fit: cover;
  }
`

const GoBack = styled.p`
  color: ${COLORS.darkGray};
  font-size: ${SIZES.xs};
  text-decoration: underline;
  cursor: pointer;
  margin-bottom: 40px;
`

const Name = styled.h3`
  display: inline;
  color: ${COLORS.main};
  font-size: ${SIZES.s};
  font-weight: 400;
  line-height: 30px;
`

const OtherProductsTitle = styled.h4`
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: ${SIZES.xs};
`

const OptionsContainer = styled.div`
  margin-top: 40px;
`

const Option = styled.div`
  position: relative;
  background-color: #eeeeee;
  padding: 1em;
  font-size: ${SIZES.xs};
  & > p {
    display: inline;
  }
  &:after {
    color: ${COLORS.main};
    font-size: ${SIZES.l};
    content: ">";
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`

const FlexContainerList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${(props) => props.gap || "0px"};
  list-style: none;
`

const Size = styled.li`
  font-size: ${SIZES.s};
  padding: 8px 14px;
  border: 1px solid rgba(0, 0, 0, 0.25);
`

const ProductScreen = ({ match, history }) => {
  const [size, setSize] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const handleClickOnOption = () => {
    setIsModalOpen(true)
    emitCustomEvent("modal-open")
  }

  useCustomEventListener("modal-closed", () => {
    setIsModalOpen(false)
  })

  const product = items.find((item) => item._id === match.params.id)
  return (
    <>
      <div>
        <GoBack onClick={history.goBack}>Volver</GoBack>
        <Name>{product.name}</Name>
        <Rating
          marginBottom="20px"
          width="17px"
          value={product.rating}
          text={`${product.numReviews} reviews`}
        />

        <ImageContainer>
          <img src={product.image} alt={product.alt} />
        </ImageContainer>
        <OptionsContainer>
          {product.sizeOptions && (
            <Option onClick={handleClickOnOption}>
              <p>Tamaño: </p>
              <strong>
                {size === null ? "Por favor, elige una opción" : size}
              </strong>
            </Option>
          )}
        </OptionsContainer>
        <OtherProductsTitle>Otros productos similares</OtherProductsTitle>
        <CustomCarousel
          products={items.filter((item) => item.category === product.category)}
        ></CustomCarousel>
      </div>
      <Modal open={isModalOpen}>
        <div>Tamaño:</div>
        <FlexContainerList gap={"15px"}>
          {product.sizeOptions &&
            product.sizeOptions.map((size) => (
              <Size key={`size-${size}`}>{size}</Size>
            ))}
        </FlexContainerList>
      </Modal>
    </>
  )
}

export default ProductScreen
