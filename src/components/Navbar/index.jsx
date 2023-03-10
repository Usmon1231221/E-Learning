import React from 'react'
import styled from 'styled-components'

const Container = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-around;
    align-items: center;
    text-align: center;
`

const LogoContainer = styled('div')``

const TextContainer = styled('div')`
    display: flex;
    align-items: center;
`

const Button = styled('div')`
    background-color: orange;
    border-radius: 5px;
    color: white;
`

const Logo = styled('h1')`
    color: blue;
` 
const Text = styled('p')`
    color: black;
    padding: 1rem 2rem;
`

const Span = styled('span')`
    color: orange;
`

const Navbar = () => {
    return(
        <Container>
            <LogoContainer>
                <Logo>
                    Edu<Span>go</Span>
                </Logo>
            </LogoContainer>
            <TextContainer>
                <Text>Home  </Text>
                <Text>Programs  </Text>
                <Text>Proffesional Education  </Text>
                <Text>Courses  </Text>
                <Text>Admissions  </Text>
                <Text>Testimonials  </Text>
            </TextContainer>
            <Button>Log in</Button>
        </Container>
    )
}

export default Navbar