import PlaylistTrack from '../PlaylistTrack/PlaylistTrack'
import s from './Playlist.module.scss'

function Playlist({ tracks }) {
  return (
    <div className={`${s.content__playlist} playlist`}>
      {tracks.map((track) => (
        <div className={s.playlist__item} key={track.id}>
          <PlaylistTrack title={track.name} titleSpan={track.subtitle} author={track.author} album={track.album} time={track.duration_in_seconds} />
        </div>
      ))}
    </div>
  )
}

export default Playlist
