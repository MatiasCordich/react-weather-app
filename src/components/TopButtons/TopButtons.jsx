import React from 'react'
import { ButtonsBox, ButtonCity, ButtonHamburguer } from './TopsButtonsElements'
import MenuButton from '../MenuButton/MenuButton'
import { useState } from 'react'

const TopButtons = ({ setQuery }) => {

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

    const [open, setOpen] = useState(false)

    const handleClick = () => {
      setOpen(!open)
    }

    return (

        <ButtonsBox>
            <MenuButton open={open} handleClick={handleClick}/>
            {cities.map((city) => (
                <ButtonCity open={open} onClick={() => setQuery({ q: city.title })} key={city.id}>{city.title}</ButtonCity>
            ))}


        </ButtonsBox>
    )
}

export default TopButtons