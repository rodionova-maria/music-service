import s from './TrackPlayLike.module.scss'
import icons from '../../assets/icons/sprite.svg'

function TrackPlayLike() {
  return (
    <div className={s['track-play__like-dis']}>
      <div className={`${s['track-play__like']} _btn-icon`}>
        <svg className={s['track-play__like-svg']} alt="like">
          <use xlinkHref={`${icons}#icon-like`} />
        </svg>
      </div>
      <div className={`${s['track-play__dislike']} _btn-icon`}>
        <svg className={s['track-play__dislike-svg']} alt="dislike">
          <use xlinkHref={`${icons}#icon-dislike`} />
        </svg>
      </div>
    </div>
  )
}

export default TrackPlayLike
