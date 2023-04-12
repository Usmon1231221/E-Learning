import React from "react"
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "../../config/config"
import { signOut } from "firebase/auth"

const Container = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`

const LogoContainer = styled("div")``

const TextContainer = styled("div")`
  display: flex;
  align-items: center;
`

const Button = styled(Link)`
  background-color: orange;
  border-radius: 5px;
  padding: 0.3rem 1rem;
  color: white;
  padding: 0.3rem 1rem;
  text-decoration: none;
`

const Logo = styled("h1")`
  color: blue;
`
const Text = styled("p")`
  color: black;
  padding: 1rem 2rem;
`

const Span = styled("span")`
  color: orange;
`

const Navbar = ({ isAuth, setIsAuth }) => {
  const navigate = useNavigate()
  const signUserOut = () => {
    signOut(auth).then(() => {
      setIsAuth(false)
      navigate("/login")
    })
  }
  return (
    <Container>
      <LogoContainer>
        <Logo>
          Edu<Span>go</Span>
        </Logo>
      </LogoContainer>
      <TextContainer>
        <Text>
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            Home
          </Link>{" "}
        </Text>
        <Text>Programs </Text>
        <Text>Proffesional Education </Text>
        <Text>Courses </Text>
        <Text>Admissions </Text>
        <Text>Testimonials </Text>
      </TextContainer>
      {isAuth ? (
        <Button to={"/login"}>Log in</Button>
      ) : (
        <Button onClick={signUserOut}>Log out</Button>
      )}
    </Container>
  )
}

export default Navbar
