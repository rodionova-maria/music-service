import s from './SidebarPersonal.module.scss'

function SidebarPersonal() {
  return (
    <div className={s.sidebar__personal}>
      <p className={`${s['sidebar__personal-name']}`}>Sergey.Ivanov</p>
      <div className={s.sidebar__avatar}></div>
    </div>
  )
}

export default SidebarPersonal
