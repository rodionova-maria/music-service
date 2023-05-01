import s from './PlayerControls.module.scss'
import icons from '../../assets/icons/sprite.svg'

function PlayerControls() {
  return (
    <div className={s.player__controls}>
      <div className={s['player__btn-prev']}>
        <svg className={s['player__btn-prev-svg']} alt="prev">
          <use xlinkHref={`${icons}#icon-prev`} />
        </svg>
      </div>
      <div className={`${s['player__btn-play']} _btn`}>
        <svg className={s['player__btn-play-svg']} alt="play">
          <use xlinkHref={`${icons}#icon-play`} />
        </svg>
      </div>
      <div className={s['player__btn-next']}>
        <svg className={s['player__btn-next-svg']} alt="next">
          <use xlinkHref={`${icons}#icon-next`} />
        </svg>
      </div>
      <div className={`{${s['player__btn-repeat']} _btn-icon`}>
        <svg className={s['player__btn-repeat-svg']} alt="repeat">
          <use xlinkHref={`${icons}#icon-repeat`} />
        </svg>
      </div>
      <div className={`${s['player__btn-shuffle']} _btn-icon`}>
        <svg className={s['player__btn-shuffle-svg']} alt="shuffle">
          <use xlinkHref={`${icons}#icon-shuffle`} />
        </svg>
      </div>
    </div>
  )
}

export default PlayerControls
