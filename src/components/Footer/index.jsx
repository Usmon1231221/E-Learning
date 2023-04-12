import React from "react"
import styled from "styled-components"
import { GrFacebookOption, GrLinkedinOption } from "react-icons/gr"
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai"

const Container = styled("div")`
  margin: 3rem 0 0 0;
  width: 100%;
  height: 150px;
  background-color: darkblue;
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
`
const Title = styled("div")`
  color: white;
`
const Logos = styled("div")``

const Logo = styled("div")`
  padding: 4px 8px;
  margin: 0 1rem 0 0;
  border-radius: 30px;
  background-color: #d3d3d365;
  color: white;
  display: inline-block;
  align-items: center;
  transition: all 0.6s;
  &:hover {
    color: darkblue;
    background-color: white;
  }
`

const Footer = () => {
  return (
    <Container>
      <Title>2023 Edugo. All rights reaerved</Title>
      <Logos>
        <Logo>
          <GrFacebookOption />
        </Logo>
        <Logo>
          <AiOutlineTwitter />
        </Logo>
        <Logo>
          <AiFillInstagram />
        </Logo>
        <Logo>
          <GrLinkedinOption />
        </Logo>
      </Logos>
    </Container>
  )
}

export default Footer
