import { useEffect, useState } from 'react'
import Icons from '../assets/icons/sprite.svg'
import Skeleton from './Skeleton'

function PlaylistItem(props) {
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
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            {isLoading ? (
              <Skeleton style={{ width: '51', height: '51' }} />
            ) : (
              <svg className="track__title-svg" alt="music">
                <use xlinkHref={`${Icons}#icon-note`} />
              </svg>
            )}
          </div>
          <div className="track__title-text">
            {isLoading ? (
              <Skeleton style={{ width: '100%', height: '19' }} />
            ) : (
              <a className="track__title-link" href="http://">
                {props.title}
                <span className="track__title-span">{props.titleSpan}</span>
              </a>
            )}
          </div>
        </div>
        <div className="track__author">
          {isLoading ? (
            <Skeleton style={{ width: '100%', height: '19' }} />
          ) : (
            <a className="track__author-link" href="http://">
              {props.author}
            </a>
          )}
        </div>
        <div className="track__album">
          {isLoading ? (
            <Skeleton style={{ width: '100%', height: '19' }} />
          ) : (
            <a className="track__album-link" href="http://">
              {props.album}
            </a>
          )}
        </div>
        <div className="track__time">
          {isLoading ? (
            <Skeleton style={{ width: '61', height: '19' }} />
          ) : (
            <>
              <svg className="track__time-svg" alt="time">
                <use xlinkHref={`${Icons}#icon-like`} />
              </svg>
              <span className="track__time-text">{props.time}</span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default PlaylistItem
