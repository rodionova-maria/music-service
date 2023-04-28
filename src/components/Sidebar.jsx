import SidebarPersonal from './SidebarPersonal'
import SidebarBlock from './SidebarBlock'

function Sidebar() {
  return (
    <div className="main__sidebar sidebar">
      <SidebarPersonal />
      <SidebarBlock />
    </div>
  )
}

export default Sidebar
