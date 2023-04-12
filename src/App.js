import "./App.css"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { useState } from "react"
import Showcase from "./components/showcase/index"
import Navbar from "./components/Navbar"
import styled from "styled-components"
import Section from "./components/Section"
import Explorer from "./components/Explorer"
import EdugoLearn from "./components/EdugoLearn"
import Home from "./pages/home"
import LoginPage from "./pages/login"

const AppContainer = styled(BrowserRouter)`
  margin: 0 4rem;
`

function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <AppContainer>
      <Routes>
        <Route
          path={"/"}
          element={<Home isAuth={isAuth} setIsAuth={setIsAuth} />}
        />
        <Route path={"/login"} element={<LoginPage setIsAuth={setIsAuth} />} />
      </Routes>
    </AppContainer>
  )
}

export default App
