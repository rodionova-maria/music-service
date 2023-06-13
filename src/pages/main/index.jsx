import Bar from '../../components/Bar/Bar'
import Nav from '../../components/Nav/Nav'
import Sidebar from '../../components/Sidebar/Sidebar'
import s from './main.module.scss'
import { useGetAllTracksQuery } from '../../services/catalog'
import CenterblockMain from '../../components/CenterblockMain/CenterblockMain'

function MainPage() {
  const { data, error, isLoading } = useGetAllTracksQuery()
  const tracksData = data

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <div className={s.main}>
        <Nav />
        <CenterblockMain data={tracksData} error={error} isLoading={isLoading} />
        <Sidebar />
      </div>
      <Bar data={tracksData} />
      <footer className="footer"></footer>
    </>
  )
}

export default MainPage
