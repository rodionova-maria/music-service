import Logo from './Logo'
import Burger from './Burger'
import Menu from './Menu'

function Nav() {
  return (
    <nav className="main__nav nav">
      <Logo />
      <Burger />
      <Menu />
    </nav>
  )
}

export default Nav
