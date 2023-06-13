import Bar from '../../components/Bar/Bar'
import Nav from '../../components/Nav/Nav'
import Sidebar from '../../components/Sidebar/Sidebar'
import s from './main.module.scss'
import { useGetAllTracksQuery } from '../../services/catalog'
import CenterblockMain from '../../components/CenterblockMain/CenterblockMain'
import Loader from '../../components/Loader/Loader'

function MainPage() {
  const { data, error, isLoading } = useGetAllTracksQuery()
  const tracksData = data

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className={s.main}>
        <Nav />
        <CenterblockMain data={tracksData} error={error} />
        <Sidebar />
      </div>
      <Bar data={tracksData} />
      <footer className="footer"></footer>
    </>
  )
}

export default MainPage
