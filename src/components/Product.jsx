import React from "react"
import styled from "styled-components"
import Rating from "./Rating"
import Heart from "./Heart"
import { Link } from "react-router-dom"

const ProductContainer = styled.div`
  background-color: white;
  width: 90%;
  border-radius: 10px;
  padding: 5em;
  display: flex;
  flex-direction: column;
`

const ImageContainer = styled.div`
  width: 100%;
  border-radius: 10px;
`

const Image = styled.img`
  width: 100%;
  height: clamp(180px, 20vw, 240px);
  object-fit: cover;
  border-radius: 5px;
  vertical-align: top;
`
const DataContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const H4 = styled.h4`
  font-size: var(--s);
  font-weight: 400;
`

const Price = styled.div`
  font-size: var(--xl);
  font-weight: 500;
  &:before {
    content: "$";
  }
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Product = ({
  _id,
  image,
  alt,
  name,
  description,
  category,
  price,
  rating,
  numReviews,
}) => {
  return (
    <ProductContainer>
      <Link to={`/product/${_id}`} style={{ textDecoration: "none" }}>
        <ImageContainer>
          <Image src={image} alt={alt} />
        </ImageContainer>
      </Link>
      <DataContainer>
        <H4>{name}</H4>
        <Rating
          value={rating}
          text={`${numReviews} reviews`}
          color={"#f8e825"}
        />
        <FlexContainer>
          <Price>{price}</Price>
          <Heart />
        </FlexContainer>
      </DataContainer>
    </ProductContainer>
  )
}

export default Product
