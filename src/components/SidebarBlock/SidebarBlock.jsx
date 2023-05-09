import SidebarItem from '../SidebarItem/SidebarItem'
import s from './SidebarBlock.module.scss'
import playlist01 from '../../assets/images/playlist01.png'
import playlist02 from '../../assets/images/playlist02.png'
import playlist03 from '../../assets/images/playlist03.png'

function SidebarBlock() {
  return (
    <div className={s.sidebar__block}>
      <div className={s.sidebar__list}>
        <SidebarItem link="/playlist/1" imgSrc={playlist01} imgAlt="Плейлист дня" />
        <SidebarItem link="/playlist/2" imgSrc={playlist02} imgAlt="100 танцевальных хитов" />
        <SidebarItem link="/playlist/3" imgSrc={playlist03} imgAlt="Инди-заряд" />
      </div>
    </div>
  )
}

export default SidebarBlock
