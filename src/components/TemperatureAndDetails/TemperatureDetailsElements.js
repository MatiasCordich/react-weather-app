import styled from 'styled-components'
import { InputBox } from '../Inputs/InputsElements'

export const DetailsBox = styled(InputBox)`
    flex-direction: column;
    gap: 4rem;
    width: 100%;
`

export const DetailText = styled.p`
    text-align: center;
    color: #fafafa;
`

export const TemperatureBox = styled(InputBox)`
    justify-content: space-around;
    align-items: center;
    width: 90%;  
`

export const Img = styled.img``
export const TemperatureText = styled.p`
    font-size: 5rem;
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
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
`
export const Data = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
`

export const ForecastText = styled(TemperatureText)`
    font-size: 1.8rem;
    font-weight: 300;
`
