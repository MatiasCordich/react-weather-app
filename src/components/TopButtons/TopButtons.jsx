import React from 'react'
import { ButtonsBox, ButtonCity} from './TopsButtonsElements'
import MenuButton from '../MenuButton/MenuButton'
import { useState } from 'react'
import { cities } from './cities'
import SwitchBtn from '../SwitchBtn/SwitchBtn'

const TopButtons = ({ setQuery }) => {

    

    const [open, setOpen] = useState(false)

    const handleClick = () => {
      setOpen(!open)
    }

    return (

        <ButtonsBox>
            <SwitchBtn/>
            <MenuButton open={open} handleClick={handleClick}/>
            {cities.map((city) => (
                <ButtonCity open={open} onClick={() => setQuery({ q: city.title })} key={city.id}>{city.title}</ButtonCity>
            ))}
        </ButtonsBox>
    )
}

export default TopButtons