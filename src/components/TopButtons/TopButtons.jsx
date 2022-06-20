import React from 'react'
import { ButtonsBox, ButtonCity } from './TopsButtonsElements'

const TopButtons = ({setQuery}) => {

    const cities = [
        {
            id: 1,
            title: 'Buenos Aires'  
        },
        {
            id: 2,
            title: 'Londres'  
        },
        {
            id: 3,
            title: 'Tokyo'  
        },
        {
            id: 4,
            title: 'Madrid'  
        },
        {
            id: 5,
            title: 'Lima'  
        },
    ]
  return (
    <ButtonsBox>
        {cities.map((city) => (
                <ButtonCity onClick={()=> setQuery({q:city.title})} key={city.id}>{city.title}</ButtonCity>  
        ))}
    </ButtonsBox>
  )
}

export default TopButtons