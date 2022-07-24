import styled from 'styled-components'
import { InputBox } from '../Inputs/InputsElements'
import { DataBox, Data, Img } from '../TemperatureAndDetails/TemperatureDetailsElements'

export const ForecastBox = styled(InputBox)`
    display: flex;
    flex-direction: column;
    margin: 5rem auto;
    width: 95%;

    @media screen and (min-width: 990px) {
        margin: 2rem auto;
    }

`
export const ForecastTitle = styled.h3`
    text-align: center;
    font-weight: 500;
    text-transform:Uppercase; 

    @media screen and (min-width: 660px) {
       text-align:left;
    }
`

export const Line = styled.hr`
    width: 100%;
    margin: .5rem auto;
`
export const ForecastData = styled(DataBox)`
    padding: 5rem;

    @media screen and (min-width: 660px) {
        flex-wrap: wrap;
        flex-direction: row;
        margin-top: 2rem;
        gap: 5rem;
    }


`
export const ForecastCard = styled(Data)`
    flex-direction: column;
`
export const ForecastHour = styled.p`
    font-weight: 200;
`

export const ForecastTemperature = styled(ForecastHour)`
    font-weight: 400;
`

export const ForecastImg = styled(Img)`
`

