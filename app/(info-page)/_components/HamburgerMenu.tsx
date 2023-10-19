import React from 'react'
import { Menu } from 'lucide-react'

interface HamburgerMenuProps {
  onToggle: () => void
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onToggle }) => {
  return (
    <Menu
      onClick={onToggle}
      className='cursor-pointer text-2xl'
      aria-label='Open Menu'
    />
  )
}

export default HamburgerMenu
