import { useEffect, useState } from 'react'
import Skeleton from '../Skeleton/Skeleton'
import s from './TrackPlayContain.module.scss'
import icons from '../../assets/icons/sprite.svg'

function TrackPlayContain() {
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
    <div className={s['track-play__contain']}>
      <div className={s['track-play__image']}>
        {isLoading ? (
          <Skeleton style={{ width: '51', height: '51' }} />
        ) : (
          <svg className={s['track-play__svg']} alt="music">
            <use xlinkHref={`${icons}#icon-note`} />
          </svg>
        )}
      </div>
      <div className={s['track-play__author']}>
        {isLoading ? (
          <Skeleton style={{ width: '49', height: '15' }} />
        ) : (
          <a className={s['track-play__author-link']} href="http://">
            Ты та...
          </a>
        )}
      </div>
      <div className={s['track-play__album']}>
        {isLoading ? (
          <Skeleton style={{ width: '49', height: '15' }} />
        ) : (
          <a className={s['track-play__album-link']} href="http://">
            Баста
          </a>
        )}
      </div>
    </div>
  )
}

export default TrackPlayContain
