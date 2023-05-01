import { useEffect, useState } from 'react'
import Skeleton from '../Skeleton/Skeleton'
import s from './PlaylistTrack.module.scss'
import icons from '../../assets/icons/sprite.svg'

function PlaylistTrack(props) {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => {
      clearTimeout(t)
    }
  }, [])

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
              {props.title}
              <span className={s['track__title-span']}>{props.titleSpan}</span>
            </a>
          )}
        </div>
      </div>
      <div className={s.track__author}>
        {isLoading ? (
          <Skeleton style={{ width: '100%', height: '19px' }} />
        ) : (
          <a className={s['track__author-link']} href="http://">
            {props.author}
          </a>
        )}
      </div>
      <div className={s.track__album}>
        {isLoading ? (
          <Skeleton style={{ width: '100%', height: '19px' }} />
        ) : (
          <a className={s['track__album-link']} href="http://">
            {props.album}
          </a>
        )}
      </div>
      <div className={s.track__time}>
        {isLoading ? (
          <Skeleton style={{ width: '61px', height: '19px' }} />
        ) : (
          <>
            <svg className={s['track__time-svg']} alt="time">
              <use xlinkHref={`${icons}#icon-like`} />
            </svg>
            <span className={s['track__time-text']}>{props.time}</span>
          </>
        )}
      </div>
    </div>
  )
}

export default PlaylistTrack
