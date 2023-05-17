import s from './PlayerControls.module.scss'
import icons from '../../assets/icons/sprite.svg'
import { useState } from 'react'

function PlayerControls({ audioRef }) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handleStart = () => {
    audioRef.current.play()
    setIsPlaying(true)
  }

  const handleStop = () => {
    audioRef.current.pause()
    setIsPlaying(false)
  }

  //   const togglePlay = isPlaying ? handleStop : handleStart

  const btnPlay = (
    <div className={`${s['player__btn-play']} _btn`} onClick={handleStart}>
      <svg className={s['player__btn-play-svg']} alt="play">
        <use xlinkHref={`${icons}#icon-play`} />
      </svg>
    </div>
  )

  const btnStop = (
    <div className={`${s['player__btn-stop']} _btn`} onClick={handleStop}>
      <svg className={s['player__btn-stop-svg']} alt="stop">
        <use xlinkHref={`${icons}#icon-stop`} />
      </svg>
    </div>
  )

  const btnPlayToggle = isPlaying ? btnStop : btnPlay

  return (
    <div className={s.player__controls}>
      <div className={s['player__btn-prev']}>
        <svg className={s['player__btn-prev-svg']} alt="prev">
          <use xlinkHref={`${icons}#icon-prev`} />
        </svg>
      </div>
      {btnPlayToggle}
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
