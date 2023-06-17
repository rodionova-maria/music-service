import s from './Volume.module.scss'
import icons from '../../assets/icons/sprite.svg'
import { useEffect } from 'react'

function Volume({ state, controls }) {
  const handleValueChange = (event) => {
    controls.volume(Number(event.target.value) / 10)
    // console.log(Number(event.target.value) / 10)
  }

  useEffect(() => {
    controls.volume(0.5)
  }, [])

  return (
    <div className={`${s['bar__volume-block']} volume`}>
      <div className={s.volume__content}>
        <div className={s.volume__image}>
          <svg className={`${s.volume__svg} _btn-icon`} alt="volume">
            <use xlinkHref={`${icons}#icon-volume`} />
          </svg>
        </div>
        <div className={`${s.volume__progress} _btn`}>
          <input className={`${s['volume__progress-line']} _btn`} type="range" name="range" min="0" max="10" defaultValue={state.volume * 10} onChange={handleValueChange} />
        </div>
      </div>
    </div>
  )
}

export default Volume
