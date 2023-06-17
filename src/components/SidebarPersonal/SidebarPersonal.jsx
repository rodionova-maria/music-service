import { useSelector } from 'react-redux'
import s from './SidebarPersonal.module.scss'
import { selectUserID } from '../../store/slices/user'

function SidebarPersonal() {
  const userID = useSelector(selectUserID)
  return (
    <div className={s.sidebar__personal}>
      <p className={`${s['sidebar__personal-name']}`}>User ID: {userID}</p>
      <div className={s.sidebar__avatar}></div>
    </div>
  )
}

export default SidebarPersonal
