import { useSelector } from 'react-redux'
import PlaylistTrack from '../PlaylistTrack/PlaylistTrack'
import s from './Playlist.module.scss'
import { selectSearch } from '../../store/slices/filter'

function Playlist({ data, error }) {
  const search = useSelector(selectSearch)
  //   const isEmptyList = !isLoading && !data?.length

  let searchData = [...data]

  if (search) {
    searchData = searchData.filter((track) => track.name.toLowerCase().includes(search.toLowerCase()))
  }

  if (error) {
    return <p>{error.message}</p>
  }

  if (!data?.length) {
    return <p>No tracks!</p>
  }

  return (
    <div className={`${s.content__playlist} playlist`}>
      {searchData.map((track) => (
        <div className={s.playlist__item} key={track.id}>
          <PlaylistTrack track={track} />
        </div>
      ))}
    </div>
  )
}

export default Playlist
