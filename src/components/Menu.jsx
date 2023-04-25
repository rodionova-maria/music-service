import MenuItem from './MenuItem'

function Menu() {
  return (
    <div className="nav__menu menu">
      <ul className="menu__list">
        <MenuItem link="http://" text="Главное" />
        <MenuItem link="http://" text="Мой плейлист" />
        <MenuItem link="http://" text="Войти" />
      </ul>
    </div>
  )
}

export default Menu
