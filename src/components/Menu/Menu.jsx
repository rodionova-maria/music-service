import MenuItem from '../MenuItem/MenuItem'
import s from './Menu.module.scss'

function Menu() {
  //   const navigate = useNavigate()

  //   const handleLogout = (event) => {
  //     event.preventDefault()
  //     removeCookie('user')
  //     navigate('/login', { replace: true })
  //   }

  return (
    <div className={`${s.nav__menu} menu`}>
      <ul className={s.menu__list}>
        <MenuItem link="/" text="Главное" />
        <MenuItem link="/favourites" text="Мой плейлист" />
        <MenuItem link="/login" text="Выйти" />
      </ul>
    </div>
  )
}

export default Menu
