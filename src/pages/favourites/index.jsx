// import CenterblockNotFilter from '../../components/CenterblockNotFilter/CenterblockNotFilter'
import Nav from '../../components/Nav/Nav'
import Bar from '../../components/Bar/Bar'
import s from './favourites.module.scss'
import Centerblock from '../../components/Centerblock/Centerblock'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useGetAllTracksQuery } from '../../services/catalog'

function FavouritesPage() {
  const { data, error, isLoading } = useGetAllTracksQuery()

  return (
    <>
      <div className={s.main}>
        <Nav />
        <Centerblock data={data} error={error} isLoading={isLoading} />
        <Sidebar isMain={false} />
      </div>
      <Bar />
      <footer className="footer"></footer>
    </>
  )
}

export default FavouritesPage
