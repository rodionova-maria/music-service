import Player from '../Player/Player'
import Volume from '../Volume/Volume'
import s from './Bar.module.scss'

function Bar() {
  return (
    <div className={s.bar}>
      <div className={s.bar__content}>
        <div className={s['bar__player-progress']}></div>
        <div className={s['bar__player-block']}>
          <Player />
          <Volume />
        </div>
      </div>
    </div>
  )
}

export default Bar
