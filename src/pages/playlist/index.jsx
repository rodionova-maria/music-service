import Nav from '../../components/Nav/Nav'
import Bar from '../../components/Bar/Bar'
import s from './playlist.module.scss'
import { useParams } from 'react-router-dom'
import Centerblock from '../../components/Centerblock/Centerblock'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useGetPlaylistByIDQuery } from '../../services/catalog'

function PlaylistPage() {
  const params = useParams()
  const id = Number(params.id)
  const { data, error, isLoading } = useGetPlaylistByIDQuery(id)
  const tracksData = data

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <div className={s.main}>
        <Nav />
        <Centerblock data={tracksData.items} error={error} isLoading={isLoading} />
        <Sidebar />
      </div>
      <Bar data={tracksData.items} />
      <footer className="footer"></footer>
    </>
  )
}

export default PlaylistPage
