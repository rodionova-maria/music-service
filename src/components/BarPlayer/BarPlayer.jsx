import { useAudio } from 'react-use'
import icons from '../../assets/icons/sprite.svg'
import s from './BarPlayer.module.scss'
import { useDispatch } from 'react-redux'
import { setCurrentTrackID } from '../../store/slices/user'
import TrackPlay from '../TrackPlay/TrackPlay'
import { useState } from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'
import Volume from '../Volume/Volume'
import { useEffect } from 'react'

const BarPlayer = ({ id, tracks }) => {
  const dispatch = useDispatch()
  const [isShuffle, setShuffle] = useState(false)
  const [isRepeat, setRepeat] = useState(false)

  let ind = tracks.findIndex((track) => track.id === id)

  if (ind < 0) {
    ind = 0
    // dispatch(setCurrentTrackID({ id: tracks[ind].id }))
  }

  useEffect(() => {
    dispatch(setCurrentTrackID({ id: tracks[ind].id }))
    console.log(tracks[ind].id)
  }, [id, ind, tracks])

  const playingTrack = tracks[ind]

  const [audio, state, controls] = useAudio({
    src: playingTrack.track_file,
    autoPlay: true,
    onEnded: () => {
      if (!isRepeat) {
        handleNext()
      } else {
        controls.seek(0)
        controls.play()
      }
    },
  })

  const btnPlay = (
    <div className={`${s['player__btn-play']} _btn`} onClick={controls.play}>
      <svg className={s['player__btn-play-svg']} alt="play">
        <use xlinkHref={`${icons}#icon-play`} />
      </svg>
    </div>
  )

  const btnStop = (
    <div className={`${s['player__btn-stop']} _btn`} onClick={controls.pause}>
      <svg className={s['player__btn-stop-svg']} alt="stop">
        <use xlinkHref={`${icons}#icon-stop`} />
      </svg>
    </div>
  )

  const btnPlayToggle = state.playing ? btnStop : btnPlay

  const getRandom = () => Math.floor(Math.random() * tracks.length)

  const handleNext = () => {
    if (isShuffle) {
      ind = getRandom()
    } else ind++

    ind = ind > tracks.length - 1 ? null : tracks[ind].id
    dispatch(setCurrentTrackID({ id: ind }))
  }

  const handlePrev = () => {
    if (isShuffle) {
      ind = getRandom()
    } else ind--

    ind = ind < 0 ? null : tracks[ind].id
    dispatch(setCurrentTrackID({ id: ind }))
  }

  return (
    <div className={s.bar}>
      <div className={s.bar__content}>
        {audio}
        <ProgressBar state={state} controls={controls} />
        <div className={s['bar__player-block']}>
          <div className={`${s.bar__player} player`}>
            <div className={s.player__controls}>
              <div className={s['player__btn-prev']}>
                <svg className={s['player__btn-prev-svg']} alt="prev" onClick={handlePrev}>
                  <use xlinkHref={`${icons}#icon-prev`} />
                </svg>
              </div>
              {btnPlayToggle}
              <div className={s['player__btn-next']}>
                <svg className={s['player__btn-next-svg']} alt="next" onClick={handleNext}>
                  <use xlinkHref={`${icons}#icon-next`} />
                </svg>
              </div>
              <div className={`${s['player__btn-repeat']} _btn-icon ${isRepeat ? '_btn-icon_active' : ''}`}>
                <svg className={s['player__btn-repeat-svg']} alt="repeat" onClick={() => setRepeat(!isRepeat)}>
                  <use xlinkHref={`${icons}#icon-repeat`} />
                </svg>
              </div>
              <div className={`${s['player__btn-shuffle']} _btn-icon ${isShuffle ? '_btn-icon_active' : ''}`}>
                <svg className={s['player__btn-shuffle-svg']} alt="shuffle" onClick={() => setShuffle(!isShuffle)}>
                  <use xlinkHref={`${icons}#icon-shuffle`} />
                </svg>
              </div>
            </div>
            <TrackPlay track={playingTrack} />
          </div>
          <Volume state={state} controls={controls} />
        </div>
      </div>
    </div>
  )
}

export default BarPlayer
