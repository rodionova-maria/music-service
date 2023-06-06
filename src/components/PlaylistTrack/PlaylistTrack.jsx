import { useEffect, useState } from 'react'
import Skeleton from '../Skeleton/Skeleton'
import s from './PlaylistTrack.module.scss'
import icons from '../../assets/icons/sprite.svg'
import { useSetLikeMutation, useSetUnlikeMutation } from '../../services/catalog'
import { useSelector } from 'react-redux'
import { selectUserID } from '../../store/slices/user'

function PlaylistTrack({ track }) {
  const [setLike] = useSetLikeMutation()
  const [setUnlike] = useSetUnlikeMutation()
  const userID = useSelector(selectUserID)
  const [isLoading, setLoading] = useState(true)

  const { id: trackID, name, author, album, stared_user, duration_in_seconds } = track
  const [isFavourite, setFavourite] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => {
      clearTimeout(t)
    }
  }, [])

  useEffect(() => {
    setFavourite(stared_user.some((user) => Number(user.id) === Number(userID)))
  }, [track])

  const handleSetLike = () => {
    if (isFavourite) setUnlike(trackID)
    else setLike(trackID)
  }

  return (
    <div className={`${s['playlist__track']} track`}>
      <div className={s.track__title}>
        <div className={s['track__title-image']}>
          {isLoading ? (
            <Skeleton style={{ width: '51px', height: '51px' }} />
          ) : (
            <svg className={s['track__title-svg']} alt="music">
              <use xlinkHref={`${icons}#icon-note`} />
            </svg>
          )}
        </div>
        <div className={s['track__title-text']}>
          {isLoading ? (
            <Skeleton style={{ width: '100%', height: '19px' }} />
          ) : (
            <a className={s['track__title-link']} href="http://">
              {name}
            </a>
          )}
        </div>
      </div>
      <div className={s.track__author}>
        {isLoading ? (
          <Skeleton style={{ width: '100%', height: '19px' }} />
        ) : (
          <a className={s['track__author-link']} href="http://">
            {author}
          </a>
        )}
      </div>
      <div className={s.track__album}>
        {isLoading ? (
          <Skeleton style={{ width: '100%', height: '19px' }} />
        ) : (
          <a className={s['track__album-link']} href="http://">
            {album}
          </a>
        )}
      </div>
      <div className={s.track__time}>
        {isLoading ? (
          <Skeleton style={{ width: '61px', height: '19px' }} />
        ) : (
          <>
            <svg className={s['track__time-svg']} alt="time" onClick={handleSetLike}>
              <use xlinkHref={`${icons}#icon-${isFavourite ? 'like' : 'dislike'}`} />
            </svg>
            <span className={s['track__time-text']}>{duration_in_seconds}</span>
          </>
        )}
      </div>
    </div>
  )
}

export default PlaylistTrack
