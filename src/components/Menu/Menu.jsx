// import { useDispatch } from 'react-redux'
import MenuItem from '../MenuItem/MenuItem'
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher'
import s from './Menu.module.scss'
// import { setLogout } from '../../store/slices/user'

function Menu() {
  //   const dispatch = useDispatch()

  //   const onClick = () => {
  //     dispatch(setLogout())
  //     localStorage.clear()
  //   }
  return (
    <>
      <div className={`${s.nav__menu} menu`}>
        <ul className={s.menu__list}>
          <MenuItem link="/" text="Главное" />
          <MenuItem link="/favourites" text="Мой плейлист" />
          {/* <MenuItem
            onClick={() => {
              onClick
            }}
            text="Выйти"
          /> */}
        </ul>
      </div>
      <ThemeSwitcher />
    </>
  )
}

export default Menu
