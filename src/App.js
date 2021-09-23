import Header from "./components/Header"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"
import styled from "styled-components"
import { Route, BrowserRouter } from "react-router-dom"

const Main = styled.main`
  padding: 2em;
  @media (min-width: 768px) {
    padding: 2em 5em;
  }
  @media (min-width: 1440px) {
    padding: 2em 8em;
  }
`

function App() {
  return (
    <BrowserRouter>
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
