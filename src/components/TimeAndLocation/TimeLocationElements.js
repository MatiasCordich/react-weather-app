import styled from 'styled-components'
import { InputBox } from '../Inputs/InputsElements' 

export const TimeAndLocationBox = styled(InputBox)`

    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    margin: 2rem 0;

    @media screen and (min-width: 990px) {
        margin: auto;
        justify-content: center;
    }
`

export const TimeText = styled.p`
    
    font-size: 1.8rem;
    font-weight: 300;
    text-align: center;

    @media screen and (min-width: 990px) {
        
    }

`

export const LocationText = styled(TimeText)`
    margin: 3rem 0;
    font-size: 4rem;
    font-weight: 500;
`

