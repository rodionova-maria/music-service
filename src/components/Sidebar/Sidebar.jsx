import SidebarPersonal from '../SidebarPersonal/SidebarPersonal'
import SidebarBlock from '../SidebarBlock/SidebarBlock'
import s from './Sidebar.module.scss'

function Sidebar() {
  return (
    <div className={`${s.main__sidebar} sidebar`}>
      <SidebarPersonal />
      <SidebarBlock />
    </div>
  )
}

export default Sidebar
