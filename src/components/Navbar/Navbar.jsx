import React from 'react'
import { SContent, Switch, SwitchBox } from './navbarElements'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
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
    <>
      <SContent>
        <BsFillSunFill />
        <SwitchBox data-ison={isToggled} onClick={onToggle}>

          <Switch as={motion.div} layout transition={spring} />
        </SwitchBox>
        <BsFillMoonFill />
      </SContent>
    </>
  )
}

export default Navbar