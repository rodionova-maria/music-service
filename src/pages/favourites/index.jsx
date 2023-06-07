import Nav from '../../components/Nav/Nav'
import Bar from '../../components/Bar/Bar'
import s from './favourites.module.scss'
import Centerblock from '../../components/Centerblock/Centerblock'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useGetAllTracksQuery } from '../../services/catalog'
import { selectUserID } from '../../store/slices/user'
import { useSelector } from 'react-redux'

function FavouritesPage() {
  const { data, error, isLoading } = useGetAllTracksQuery()
  const userID = useSelector(selectUserID)

  if (isLoading) {
    return <p>Loading...</p>
  }

  const tracksData = data.filter((track) => track.stared_user.some((user) => user.id === userID))

  return (
    <>
      <div className={s.main}>
        <Nav />
        <Centerblock data={tracksData} error={error} isLoading={isLoading} />
        <Sidebar />
      </div>
      <Bar />
      <footer className="footer"></footer>
    </>
  )
}

export default FavouritesPage
