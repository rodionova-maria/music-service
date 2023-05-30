import { useGetAllTracksQuery } from '../../services/catalog'
import PlaylistTrack from '../PlaylistTrack/PlaylistTrack'
import s from './Playlist.module.scss'

function Playlist() {
  const { data, error, isLoading } = useGetAllTracksQuery()

  const isEmptyList = !isLoading && !data?.length

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  if (isEmptyList) {
    return <p>No tracks!</p>
  }

  return (
    <div className={`${s.content__playlist} playlist`}>
      {data.map((track) => (
        <div className={s.playlist__item} key={track.id}>
          <PlaylistTrack track={track} />
        </div>
      ))}
    </div>
  )
}

export default Playlist
