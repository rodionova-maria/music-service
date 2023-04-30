import MenuItem from '../MenuItem/MenuItem'
import s from './Menu.module.scss'

function Menu() {
  return (
    <div className={`${s.nav__menu} menu`}>
      <ul className={s.menu__list}>
        <MenuItem link="http://" text="Главное" />
        <MenuItem link="http://" text="Мой плейлист" />
        <MenuItem link="http://" text="Войти" />
      </ul>
    </div>
  )
}

export default Menu
