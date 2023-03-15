import React from "react";
import styled from "styled-components";
import { CardInfo } from "./constants";
import { PlayCircle, Star } from "react-feather";


const Container = styled('div')`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 2rem;
    margin: 2rem 0;
`

const Card = styled('div')`
    border: 1px solid lightgray;
    width: 400px;
    height: 330px;
    padding: .7rem 1rem;
    border-radius: 6px;
    &:hover{
        background-color: darkblue;
        color: white;
        .btn{
            background-color: orangered;
        }
    }
`

const CardIcon = styled('div')`
    padding: .6rem 0;
`

const CardInfos = styled('div')`
    border-bottom: 1px solid lightgray;
    padding: .5rem 0;
`

const CardButtons = styled('div')``

const Infos = styled('div')`
    display: flex;
    color: blue;
    margin: .5rem 0;
`
const Button = styled('button')`
    background: none;
    border: 1px solid blue;
    border-radius: 5px;
    color: blue;
    padding: .5rem 1rem;
`

const Cards = () => {
    return(
        <Container>
            {CardInfo.map((d) => (
                <Card>
                    <CardIcon>{d.icon}</CardIcon>
                    <CardInfos>
                        <h3>{d.title}</h3>
                        <h3>{d.cost}</h3>
                    </CardInfos>
                    <CardButtons>
                            <Infos>
                                <PlayCircle style={{margin: "0 0.5rem 0 0 ", color: 'orangered'}}/>
                                <p>{d.videos} videos</p>
                                <Star style={{margin: "0 0.5rem 0 1rem ", color: 'orangered'}}/>
                                <p>{d.viewers} views</p>
                            </Infos>
                        <Button className="btn">Join Now</Button>
                    </CardButtons>
                </Card>
            ))}
        </Container>
    )
}

export default Cards