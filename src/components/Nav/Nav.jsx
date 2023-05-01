import { useState } from 'react'
import Logo from '../Logo/Logo'
import Burger from '../Burger/Burger'
import Menu from '../Menu/Menu'
import s from './Nav.module.scss'

function Nav() {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => setVisible(!visible)

  return (
    <nav className={`${s.main__nav} nav`}>
      <Logo />
      <Burger onClick={toggleVisibility} />
      {visible && <Menu />}
    </nav>
  )
}

export default Nav
