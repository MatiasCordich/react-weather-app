import React from 'react'
import { SContent, Switch, SwitchBox } from './navbarElements'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Navbar = ({ handleClick }) => {

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

  return (
    <>
      <SContent>
        <BsFillSunFill />
        <SwitchBox onClick={handleClick} >
          <Switch  as={motion.div} layout transition={spring} />
        </SwitchBox>
        <BsFillMoonFill />
      </SContent>
    </>
  )
}

export default Navbar