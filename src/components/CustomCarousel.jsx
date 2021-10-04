import React from "react"
import Carousel from "react-elastic-carousel"
import "../assets/css/react-elastic-carousel.css"
import useWindowSize from "../hooks/useWindowSize"
import Product from "./Product"

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
]

const CustomCarousel = ({ products, ...props }) => {
  const { width } = useWindowSize()
  return (
    <Carousel
      breakPoints={breakPoints}
      showArrows={width > 480 ? true : false}
      {...props}
    >
      {products.map((item) => (
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
      ))}
    </Carousel>
  )
}

export default CustomCarousel
