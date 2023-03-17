import Cards from "./Cards"
import Input from "./Input"
import styled from "styled-components"

const Container = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Button = styled('button')`
    padding: .4rem .8rem;
    border: none;
    color: white;
    background-color: orangered;
    border-radius: 10px;
    transition: all .2s;
    &:hover{
        background-color: #c73500;
    }
`

const Section = () => {
    return(
        <Container>
            <Input/>
            <Cards/>
            <Button>Lead More Courses</Button>
        </Container>
    )
}

export default Section