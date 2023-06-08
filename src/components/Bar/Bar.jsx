import { useEffect, useRef, useState } from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'
import Player from '../Player/Player'
import Volume from '../Volume/Volume'
import s from './Bar.module.scss'
import { useSelector } from 'react-redux'
import { selectCurrentTrackID } from '../../store/slices/user'

// function Bar({ currentTrack }) {
function Bar({ data }) {
  const currentTrackID = useSelector(selectCurrentTrackID)

  if (!currentTrackID) {
    return
  }

  const audioRef = useRef(null)
  const progressBarRef = useRef(null)
  const [duration, setDuration] = useState(0)
  const [currentTrack, setCurrentTrack] = useState({})

  useEffect(() => {
    const currentTrackIndex = data.findIndex((track) => track.id === currentTrackID)

    setCurrentTrack(data[currentTrackIndex])
  }, [currentTrackID])

  // console.log(currentTrack.track_file)
  // console.log(currentTrack.duration_in_seconds)

  const onLoadedMetadata = () => {
    const duration_in_seconds = audioRef.current.duration
    setDuration(duration_in_seconds)
    progressBarRef.current.max = duration_in_seconds
  }

  return (
    <div className={s.bar}>
      <div className={s.bar__content}>
        <audio ref={audioRef} src={currentTrack.track_file} className={s.audio_hidden} onLoadedMetadata={onLoadedMetadata}></audio>
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
