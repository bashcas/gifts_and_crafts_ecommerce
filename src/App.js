import Header from "./components/Header"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"
import styled from "styled-components"
import { Route, BrowserRouter } from "react-router-dom"
import { useState } from "react"
import { useCustomEventListener, emitCustomEvent } from "react-custom-events"

const Main = styled.main`
  padding: 2em;
  @media (min-width: 768px) {
    padding: 2em 5em;
  }
  @media (min-width: 1440px) {
    padding: 2em 8em;
  }
`

const BlurBackground = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: #000;
  opacity: 0.5;
  z-index: 10;
`

function App() {
  const [blurBackground, setBlurBackground] = useState(false)

  useCustomEventListener("modal-open", () => {
    setBlurBackground(true)
  })

  const handleClickOnBlurBackground = () => {
    setBlurBackground(false)
    emitCustomEvent("modal-closed")
  }

  return (
    <BrowserRouter>
      {blurBackground && (
        <BlurBackground onClick={handleClickOnBlurBackground} />
      )}
      <Header />
      <Nav />
      {window.location.pathname === "/" && <Hero />}
      <Main>
        <Route component={HomeScreen} path="/" exact />
        <Route component={ProductScreen} path="/product/:id" exact />
      </Main>
      <Footer />
      <Contact />
    </BrowserRouter>
  )
}

export default App
