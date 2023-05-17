import PlayerControls from '../PlayerControls/PlayerControls'
import TrackPlay from '../TrackPlay/TrackPlay'
import s from './Player.module.scss'

function Player({ audioRef }) {
  return (
    <div className={`${s.bar__player} player`}>
      <PlayerControls audioRef={audioRef} />
      <TrackPlay />
    </div>
  )
}

export default Player
