import React from 'react'
import { SwitchBox, Switch, SContent } from './switchBtnElements'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

const SwitchBtn = () => {

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    };

    const [isToggled, setToggled] = useState(false)

    const onToggle = () => {
        setToggled(!isToggled)
    }
    return (
        <SContent>
            <BsFillSunFill />
            <SwitchBox data-ison={isToggled} onClick={onToggle}>

                <Switch as={motion.div} layout transition={spring} />
            </SwitchBox>
            <BsFillMoonFill/>
        </SContent>

    )
}

export default SwitchBtn