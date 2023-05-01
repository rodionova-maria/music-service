import SidebarItem from '../SidebarItem/SidebarItem'
import s from './SidebarBlock.module.scss'
import playlist01 from '../../assets/images/playlist01.png'
import playlist02 from '../../assets/images/playlist02.png'
import playlist03 from '../../assets/images/playlist03.png'

function SidebarBlock() {
  return (
    <div className={s.sidebar__block}>
      <div className={s.sidebar__list}>
        <SidebarItem link="#" imgSrc={playlist01} imgAlt="day's playlist" />
        <SidebarItem link="#" imgSrc={playlist02} imgAlt="day's playlist" />
        <SidebarItem link="#" imgSrc={playlist03} imgAlt="day's playlist" />
      </div>
    </div>
  )
}

export default SidebarBlock
