import icons from '../../assets/icons/sprite.svg'
import s from './TrackPlay.module.scss'

function TrackPlay({ track }) {
  return (
    <div className={`${s['player__track-play']} track-play`}>
      <div className={s['track-play__contain']}>
        <div className={s['track-play__image']}>
          <svg className={s['track-play__svg']} alt="music">
            <use xlinkHref={`${icons}#icon-note`} />
          </svg>
        </div>
        <div className={s['track-play__author']}>
          <a className={s['track-play__author-link']}>{track.name}</a>
        </div>
        <div className={s['track-play__album']}>
          <a className={s['track-play__album-link']}>{track.author}</a>
        </div>
      </div>
    </div>
  )
}

export default TrackPlay
