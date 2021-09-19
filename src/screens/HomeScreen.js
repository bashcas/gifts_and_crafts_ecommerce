import React from "react"
import { items } from "../mocks/carouselItems"
import Product from "../components/Product"

const HomeScreen = () => {
  return (
    <div>
      <h2>Cajas Dulceras</h2>
      {items.map((item) => (
        <Product />
      ))}
      <h2>Anchetas</h2>
      {items.map((item) => (
        <Product />
      ))}
      <h2>Globos Burbuja</h2>
      {items.map((item) => (
        <Product />
      ))}
      <h2>Cartas</h2>
      {items.map((item) => (
        <Product />
      ))}
    </div>
  )
}

export default HomeScreen
