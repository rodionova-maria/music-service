import { Link } from 'react-router-dom'
import s from './MenuItem.module.scss'

function MenuItem(props) {
  return (
    <li className={s.menu__item}>
      <Link to={props.link} className={s.menu__link} onClick={props.onClick}>
        {props.text}
      </Link>
    </li>
  )
}

export default MenuItem
