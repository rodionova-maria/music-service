import s from './Volume.module.scss'
import icons from '../../assets/icons/sprite.svg'

function Volume() {
  return (
    <div className={`${s['bar__volume-block']} volume`}>
      <div className={s.volume__content}>
        <div className={s.volume__image}>
          <svg className={s.volume__svg} alt="volume">
            <use xlinkHref={`${icons}#icon-volume`} />
          </svg>
        </div>
        <div className={`${s.volume__progress} _btn`}>
          <input className={`${s['volume__progress-line']} _btn`} type="range" name="range" />
        </div>
      </div>
    </div>
  )
}

export default Volume
