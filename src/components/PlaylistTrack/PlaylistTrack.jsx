import { useEffect, useState } from 'react'
import s from './PlaylistTrack.module.scss'
import icons from '../../assets/icons/sprite.svg'
import { useSetLikeMutation, useSetUnlikeMutation } from '../../services/catalog'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserID, setCurrentTrackID } from '../../store/slices/user'

function PlaylistTrack({ track }) {
  const [setLike] = useSetLikeMutation()
  const dispatch = useDispatch()
  const [setUnlike] = useSetUnlikeMutation()
  const userID = useSelector(selectUserID)

  const { id: trackID, name, author, album, stared_user, duration_in_seconds, track_file, release_date } = track
  const [isFavourite, setFavourite] = useState(false)

  useEffect(() => {
    setFavourite(stared_user.some((user) => user.id === userID))
  }, [track])

  const handleSetLike = () => {
    if (isFavourite) setUnlike(trackID)
    else setLike(trackID)
  }

  const handleClickTrack = (event) => {
    event.preventDefault()
    dispatch(setCurrentTrackID({ id: trackID }))
  }

  function secondsToMinutes(time) {
    return (
      Math.floor(time / 60)
        .toString()
        .padStart(2, '0') +
      ':' +
      Math.floor(time % 60)
        .toString()
        .padStart(2, '0')
    )
  }

  return (
    <div className={`${s['playlist__track']} track`}>
      <div className={s.track__title}>
        <div className={s['track__title-image']}>
          <svg className={s['track__title-svg']} alt="music">
            <use xlinkHref={`${icons}#icon-note`} />
          </svg>
        </div>
        <div className={s['track__title-text']}>
          <a className={s['track__title-link']} href={track_file} onClick={handleClickTrack}>
            {name}
          </a>
        </div>
      </div>
      <div className={s.track__author}>
        <span className={s['track__author-link']}>{author}</span>
      </div>
      <div className={s.track__album}>
        <span className={s['track__album-link']}>
          {album} ({release_date})
        </span>
      </div>
      <div className={s.track__time}>
        <svg className={s['track__time-svg']} alt="time" onClick={handleSetLike}>
          <use xlinkHref={`${icons}#icon-${isFavourite ? 'like' : 'dislike'}`} />
        </svg>
        <span className={s['track__time-text']}>{secondsToMinutes(duration_in_seconds)}</span>
      </div>
    </div>
  )
}

export default PlaylistTrack
