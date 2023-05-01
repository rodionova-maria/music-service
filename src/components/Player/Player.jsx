import PlayerControls from '../PlayerControls/PlayerControls'
import TrackPlay from '../TrackPlay/TrackPlay'
import s from './Player.module.scss'

function Player() {
  return (
    <div className={`${s.bar__player} player`}>
      <PlayerControls />
      <TrackPlay />
    </div>
  )
}

export default Player
