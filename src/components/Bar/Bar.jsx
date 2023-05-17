import { useRef, useState } from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'
import Player from '../Player/Player'
import Volume from '../Volume/Volume'
import s from './Bar.module.scss'

function Bar({ currentTrack }) {
  currentTrack = '/music/Bobby_Marleni_-_Dropin.mp3'

  const audioRef = useRef(null)
  const progressBarRef = useRef(null)

  const [duration, setDuration] = useState(0)

  const onLoadedMetadata = () => {
    const duration_in_seconds = audioRef.current.duration
    setDuration(duration_in_seconds)
    progressBarRef.current.max = duration_in_seconds
  }

  return (
    <div className={s.bar}>
      <div className={s.bar__content}>
        <audio ref={audioRef} src={currentTrack} className={s.audio_hidden} onLoadedMetadata={onLoadedMetadata}></audio>
        <ProgressBar audioRef={audioRef} progressBarRef={progressBarRef} duration={duration} />
        <div className={s['bar__player-block']}>
          <Player audioRef={audioRef} />
          <Volume />
        </div>
      </div>
    </div>
  )
}

export default Bar
