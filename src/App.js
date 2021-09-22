import Header from "./components/Header"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import HomeScreen from "./screens/HomeScreen"
import styled from "styled-components"

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
    <>
      <Header />
      <Nav />
      <Hero />
      <Main>
        <HomeScreen></HomeScreen>
      </Main>
      <Footer />
      <Contact />
    </>
  )
}

export default App
