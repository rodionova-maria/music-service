import Bar from '../../components/Bar/Bar'
import Nav from '../../components/Nav/Nav'
import Centerblock from '../../components/Centerblock/Centerblock'
import Sidebar from '../../components/Sidebar/Sidebar'
import s from './main.module.scss'
import { useGetAllTracksQuery } from '../../services/catalog'

function MainPage() {
  const { data, error, isLoading } = useGetAllTracksQuery()
  const tracksData = data

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <div className={s.main}>
        <Nav />
        <Centerblock isMain={true} data={tracksData} error={error} isLoading={isLoading} />
        <Sidebar isMain={true} />
      </div>
      <Bar />
      <footer className="footer"></footer>
    </>
  )
}

export default MainPage
