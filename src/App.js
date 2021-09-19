import Header from "./components/Header"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import HomeScreen from "./screens/HomeScreen"
import styled from "styled-components"

const Main = styled.main`
  padding: 2em 15em;
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
