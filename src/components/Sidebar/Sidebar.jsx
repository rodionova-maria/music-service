import SidebarPersonal from '../SidebarPersonal/SidebarPersonal'
import SidebarBlock from '../SidebarBlock/SidebarBlock'
import s from './Sidebar.module.scss'

function Sidebar({ isMain }) {
  return (
    <div className={`${s.main__sidebar} sidebar`}>
      <SidebarPersonal />
      {isMain && <SidebarBlock />}
    </div>
  )
}

export default Sidebar
