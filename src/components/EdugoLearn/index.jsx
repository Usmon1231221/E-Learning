import React from "react";
import styled from "styled-components";
import student from '../../images/student.png'
import { AiFillCheckCircle } from 'react-icons/ai'
import { Infos } from "./constants";

const Container = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0  8rem;
    margin: 4rem 0;
`

const RightContent = styled('div')``

const LeftContent = styled('div')``

const Img = styled('img')``

const Title = styled('h1')`
    width: 300px;
    color: #06066f;
`
const Info = styled('p')`
    width: 500px;
    color: gray;
`
const Checker = styled('div')`
    display: flex;
`

const CheckInfo = styled('p')`
    color: darkblue;
    font-weight: 600;
`

const CheckerContainer = styled('div')`
    display: flex;
    flex-wrap: wrap;
    width: 280px;
    gap: .2rem 3rem;
`

const Button = styled('button')`
    border: none;
    padding: .8rem 1.5rem;
    color: white;
    background-color: darkblue;
    border-radius: 10px;
    margin: 2rem 0;
`

const EdugoLearn = () => {
    return (
        <Container>
            <RightContent>
                <Img src={student} style={{ width: '400px', height: '500px' }} />
            </RightContent>
            <LeftContent>
                <Title>Why We Learn From Edugo</Title>
                <Info>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis ab ut nemo ullam, adipisci voluptas soluta officiis dolores, molestias illum culpa laboriosam, vel tempore autem iure excepturi necessitatibus voluptatum cum?</Info>
                <CheckerContainer>
                    {Infos.map((d) => (
                        <Checker>
                            <AiFillCheckCircle size={25} color={'orangered'} />
                            <CheckInfo>{d.title}</CheckInfo>
                        </Checker>
                    ))}
                </CheckerContainer>
                <Button>Register Now</Button>
            </LeftContent>
        </Container>
    )
}

export default EdugoLearn