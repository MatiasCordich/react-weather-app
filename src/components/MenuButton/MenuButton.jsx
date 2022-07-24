import React from 'react'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { MenuButtonBox } from './MenuButtonElements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const MenuButton = ({ open, handleClick }) => {
  return !open ? (
    <MenuButtonBox onClick={handleClick}>
      <FontAwesomeIcon icon={faClose} />
    </MenuButtonBox>
  ) : (

    <MenuButtonBox onClick={handleClick}>
      <FontAwesomeIcon icon={faBars} />
    </MenuButtonBox>
  )
}

export default MenuButton