import React from "react"
import halfStar from "../assets/half-star.png"
import wholeStar from "../assets/whole-star.png"
import emptyStar from "../assets/empty-star.png"
import styled from "styled-components"
import { SIZES } from "../constants"

const StyledSpan = styled.span`
  font-size: ${SIZES.xs};
  margin-left: 5px;
`

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Star = styled.img`
  width: 24px;
  height: 24px;
`

const Rating = ({ value, text }) => {
  return (
    <Container>
      <span>
        <Star
          src={value >= 1 ? wholeStar : value >= 0.5 ? halfStar : emptyStar}
          alt="star"
        />
      </span>
      <span>
        <Star
          src={value >= 2 ? wholeStar : value >= 1.5 ? halfStar : emptyStar}
          alt="star"
        />
      </span>
      <span>
        <Star
          src={value >= 3 ? wholeStar : value >= 2.5 ? halfStar : emptyStar}
          alt="star"
        />
      </span>
      <span>
        <Star
          src={value >= 4 ? wholeStar : value >= 3.5 ? halfStar : emptyStar}
          alt="star"
        />
      </span>
      <span>
        <Star
          src={value >= 5 ? wholeStar : value >= 4.5 ? halfStar : emptyStar}
          alt="star"
        />
      </span>
      <StyledSpan>{text && text}</StyledSpan>
    </Container>
  )
}

export default Rating
