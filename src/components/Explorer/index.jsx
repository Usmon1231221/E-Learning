import React from "react";
import styled from "styled-components";
import { ExplorerInfo } from "./constants";


const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0;
`

const Card = styled('div')`
    border-radius: 6px;
    width: 400px;
    padding: 1rem 2rem;
    transition: all .3s;
    background-color: #e9e9e9;
    display: flex;
    &:hover{
        background-color: white;
    }
`

const CardIcon = styled('div')`
    border-radius: 5px;
    color: darkblue;
`




const Title = styled('h4')`
    color: darkblue;
`
const Cards = styled('div')`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 3rem 1rem;
    gap: 2rem;
    border-radius: 6px;
`

const Header = styled('h1')`
    color: darkblue;
`
const SubTitle = styled('p')`
    width: 700px;
    text-align: center;
`

const Explorer = () => {
    return(
        <Container>
            <Header>Explore Courses</Header>
            <SubTitle>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet at aperiam sed, ab quia veritatis placeat nam? Optio ducimus debitis, soluta numquam quaerat magni ullam atque doloribus harum rerum impedit.</SubTitle>
            <Cards>            
            {ExplorerInfo.map((d, index) => (
                <Card key={index}>
                    <CardIcon className="icon">{d.icon}</CardIcon>
                    <Title className="title">{d.title}</Title>
                </Card>
            ))}
            </Cards>
        </Container>
    )
}

export default Explorer