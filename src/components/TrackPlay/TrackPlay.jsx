import TrackPlayContain from '../TrackPlayContain/TrackPlayContain'
import TrackPlayLike from '../TrackPlayLike/TrackPlayLike'
import s from './TrackPlay.module.scss'

function TrackPlay() {
  return (
    <div className={`${s['player__track-play']} track-play`}>
      <TrackPlayContain />
      <TrackPlayLike />
    </div>
  )
}

export default TrackPlay
