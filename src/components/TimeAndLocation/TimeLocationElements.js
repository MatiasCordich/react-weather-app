import styled from 'styled-components'
import { InputBox } from '../Inputs/InputsElements' 

export const TimeAndLocationBox = styled(InputBox)`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TimeText = styled.p`
    font-size: 1.8rem;
    font-weight: 300;
`

export const LocationText = styled(TimeText)`
    margin: 3rem 0;
    font-size: 4rem;
    font-weight: 500;
`

