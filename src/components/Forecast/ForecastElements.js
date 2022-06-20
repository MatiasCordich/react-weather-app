import styled from 'styled-components'
import { InputBox } from '../Inputs/InputsElements'
import { DataBox, Data, Img } from '../TemperatureAndDetails/TemperatureDetailsElements'

export const ForecastBox = styled(InputBox)`
    display: flex;
    flex-direction: column;
    margin: 2rem auto;
    width: 90%;
`
export const ForecastTitle = styled.h3`
    font-weight: 500;
    text-transform:Uppercase; 
`

export const Line = styled.hr`
    width: 100%;
    margin: .5rem auto;
`
export const ForecastData = styled(DataBox)`
    margin-top: 2rem;
    justify-content: space-around;

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

