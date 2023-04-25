import Icons from '../assets/icons/sprite.svg'
import { useEffect, useState } from 'react'
import Skeleton from './Skeleton'

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
    <div className="track-play__contain">
      <div className="track-play__image">
        {isLoading ? (
          <Skeleton style={{ width: '51', height: '51' }} />
        ) : (
          <svg className="track-play__svg" alt="music">
            <use xlinkHref={`${Icons}#icon-note`} />
          </svg>
        )}
      </div>
      <div className="track-play__author">
        {isLoading ? (
          <Skeleton style={{ width: '49', height: '15' }} />
        ) : (
          <a className="track-play__author-link" href="http://">
            Ты та...
          </a>
        )}
      </div>
      <div className="track-play__album">
        {isLoading ? (
          <Skeleton style={{ width: '49', height: '15' }} />
        ) : (
          <a className="track-play__album-link" href="http://">
            Баста
          </a>
        )}
      </div>
    </div>
  )
}

export default TrackPlayContain
