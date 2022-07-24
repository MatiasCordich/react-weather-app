import styled from 'styled-components'
import { InputBox } from '../Inputs/InputsElements'

export const DetailsBox = styled(InputBox)`
    flex-direction: column;
    gap: 6rem;
    width: 100%;
`

export const DetailText = styled.p`
    text-align: center;
    color: #fafafa;
`

export const TemperatureBox = styled(InputBox)`
    flex-direction: column;
    justify-content: center;
    
    @media screen and (min-width: 660px) {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }

    @media screen and (min-width: 990px) {
        width: 70%;
    }

`

export const Img = styled.img`
    margin: 0 auto;
    max-width: 20rem;

    @media screen and (min-width: 660px) {
        margin: 0;
    }


`
export const TemperatureText = styled.p`
    text-align: center;
    font-size: 5rem;

    @media screen and (min-width: 990px) {
        justify-content: space-around;
        align-items: center;
        width: 90%;
    }
`
export const OthersDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`
export const Details = styled.div`
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Description = styled.span`
    margin-left: .5rem;
`

export const UpAndDown = styled(InputBox)`
    width: 100%;
`

export const DataBox = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media screen and (min-width: 660px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    
`
export const Data = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
`

export const ForecastText = styled(TemperatureText)`
    flex-direction: column;
    font-size: 1.8rem;
    font-weight: 300;
`
