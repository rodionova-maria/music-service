// import CenterblockNotFilter from '../../components/CenterblockNotFilter/CenterblockNotFilter'
import Nav from '../../components/Nav/Nav'
import Bar from '../../components/Bar/Bar'
import s from './playlist.module.scss'
import { useParams } from 'react-router-dom'
import Centerblock from '../../components/Centerblock/Centerblock'
import Sidebar from '../../components/Sidebar/Sidebar'

function PlaylistPage() {
  const params = useParams()
  const playlistId = Number(params.id)

  return (
    <>
      <div className={s.main}>
        <Nav />
        <Centerblock playlistId={playlistId} />
        <Sidebar isMain={false} />
      </div>
      <Bar />
      <footer className="footer"></footer>
    </>
  )
}

export default PlaylistPage
