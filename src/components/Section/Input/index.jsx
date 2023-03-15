import React from 'react'
import styled from 'styled-components'
import { Search, User, Eye } from 'react-feather'

const Container = styled('div')``
const FilterContainer = styled('div')`
    display: flex;
`

const Filter = styled('div')`
    border: 1px solid gray;
    display: flex;
    border-radius: 6px;
    margin: 0 1rem 0 0;
    justify-content: space-between;
    &:first-child{
        width: 80%;
    }
    -webkit-box-shadow: 0px 12px 26px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 12px 26px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 12px 26px 0px rgba(34, 60, 80, 0.2);
    
    `

const InputForm = styled('div')`
    margin: 4px 6px;
`


const InputBar  = styled('input')`
    border: none;
    
`

const Button = styled('button')`
    background-color: orangered;
    border: none;
    margin: 4px 6px;
    color: white;
    border-radius: 6px;
`

    
const Input = () => {
    return(
        <Container>
            <FilterContainer>
                <Filter>
                    <InputForm>
                        <Search color = 'orangered'/>
                          <InputBar placeholder='Course name'/>             
                    </InputForm>
                    <InputForm>
                        <User color = 'orangered'/>
                          <InputBar placeholder='Tutor name'/>             
                    </InputForm>
                    <Button>
                        <Search color='white'/>
                        Search</Button>
                </Filter>
                <Filter>
                    <InputForm>
                        <Eye color='orangered'/>
                          <InputBar placeholder='Popular courses'/>             
                    </InputForm>
                </Filter>
                </FilterContainer>
        </Container>
    )
}

export default Input