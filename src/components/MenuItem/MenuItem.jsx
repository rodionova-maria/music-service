import { Link } from 'react-router-dom'
import s from './MenuItem.module.scss'

function MenuItem({ link, text, onClick, name }) {
  return (
    <li className={s.menu__item}>
      <Link to={link} className={s.menu__link} onClick={onClick}>
        {text}
      </Link>
    </li>
  )
}

export default MenuItem
