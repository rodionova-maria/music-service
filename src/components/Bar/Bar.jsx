import { useRef, useState } from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'
import Player from '../Player/Player'
import Volume from '../Volume/Volume'
import s from './Bar.module.scss'
import { useSelector } from 'react-redux'
import { selectCurrentTrackID } from '../../store/slices/user'
import { useEffect } from 'react'

function Bar({ data }) {
  const audioRef = useRef(null)
  const progressBarRef = useRef(null)
  const [duration, setDuration] = useState(0)
  const [playingTrack, setPlayingTrack] = useState({})

  //   console.log(data)
  const currentTrackID = useSelector(selectCurrentTrackID)
  //   console.log(useSelector(selectCurrentTrackID))
  if (!currentTrackID) return

  const currentIndex = data.findIndex((track) => track.id === currentTrackID)

  //   console.log(data[currentIndex]);

  useEffect(() => {
    setPlayingTrack(data[currentIndex])
  }, [currentTrackID])

  console.log(duration)

  const onLoadedMetadata = () => {
    const duration_in_seconds = audioRef.current.duration
    setDuration(duration_in_seconds)
    progressBarRef.current.max = duration_in_seconds
  }

  return (
    <div className={s.bar}>
      <div className={s.bar__content}>
        <audio ref={audioRef} src={playingTrack.track_file} className={s.audio_hidden} onLoadedMetadata={onLoadedMetadata}></audio>
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
