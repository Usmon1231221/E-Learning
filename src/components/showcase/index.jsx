import React from 'react'
import styled from 'styled-components'
import Teacher from '../../images/man.png'


const Big = styled("div")`
    margin-top: 200px;
    display: flex;
    justify-content: space-around;
`

const Left = styled('div')`
    display: flex;
    flex-direction: column;
    width: 40%;
    gap: 30px;
`
const Span = styled('span')`
    color: orangered;
`
const Button = styled('button')`
    background-color: orangered;
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    color: #fff;
`

const Right = styled('div')`
    
`
const Img = styled('img')``

const Showcase = () => {
    return (
        <Big>
            <Left>
                <h1>The <Span>Future</Span> Of <br />
                    Education Is Here !</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis <br />
                    voluptas sapiente voluptates deleniti tenetur asperiores architecto nulla <br />
                    assumenda temporibus neque!</p>
                <div>
                    <Button>Explore Courses</Button>
                </div>
            </Left>
            <Right>
                <Img src={Teacher} />
            </Right>
        </Big>
    )
}

export default Showcase