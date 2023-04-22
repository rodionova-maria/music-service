import Player from './Player'
import Volume from './Volume'

function Bar() {
  return (
    <div className="bar">
      <div className="bar__content">
        <div className="bar__player-progress"></div>
        <div className="bar__player-block">
          <Player />
          <Volume />
        </div>
      </div>
    </div>
  )
}

export default Bar
