import { useEffect, useState } from 'react'
import Skeleton from '../Skeleton/Skeleton'
import s from './PlaylistTrack.module.scss'
import icons from '../../assets/icons/sprite.svg'
import { useSetLikeMutation, useSetUnlikeMutation } from '../../services/catalog'
import { useSelector } from 'react-redux'
import { selectUserID } from '../../store/slices/user'

function PlaylistTrack({ track }) {
  const [setLike, { isSuccess: isSuccessLike }] = useSetLikeMutation()
  const [setUnlike, { isSuccess: isSuccessUnlike }] = useSetUnlikeMutation()
  const userID = useSelector(selectUserID)
  const [isLoading, setLoading] = useState(true)

  const { id: trackID, name, author, album, stared_user, duration_in_seconds } = track
  const [isFavourite, setFavourite] = useState(stared_user.some((user) => user.id === userID))

  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => {
      clearTimeout(t)
    }
  }, [])

  //   console.log('trackid', trackID, 'like', isFavourite)

  const handleSetLike = () => {
    if (isFavourite) {
      setUnlike(trackID)
        .unwrap()
        .then(() => {
          if (isSuccessUnlike) {
            console.log(isFavourite, userID)
            setFavourite(false)
          }
        })
        .catch((e) => console.log(e))
    } else {
      setLike(trackID)
        .unwrap()
        .then(() => {
          if (isSuccessLike) {
            console.log(isFavourite, userID)
            setFavourite(true)
          }
        })
        .catch((e) => console.log(e))
    }
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
