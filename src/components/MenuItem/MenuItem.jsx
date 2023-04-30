import s from './MenuItem.module.scss'

function MenuItem(props) {
  return (
    <li className={s.menu__item}>
      <a href={props.link} className={s.menu__link}>
        {props.text}
      </a>
    </li>
  )
}

export default MenuItem
