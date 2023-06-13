import { Link } from 'react-router-dom'
import s from './SidebarItem.module.scss'

function SidebarItem(props) {
  return (
    <div className={s.sidebar__item}>
      <Link className={s.sidebar__link} to={props.link}>
        <img className={s.sidebar__img} src={props.imgSrc} alt={props.imgAlt} />
      </Link>
    </div>
  )
}

export default SidebarItem
