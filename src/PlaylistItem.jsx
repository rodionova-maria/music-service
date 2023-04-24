// import { useEffect, useState } from 'react'
// import ContentLoader from 'react-content-loader'
import Icons from './assets/icons/sprite.svg'

function PlaylistItem(props) {
  //   const [loading, setLoading] = useState(true)

  //   useEffect(() => {
  //     const t = setTimeout(() => {
  //       setLoading(false)
  //     }, 30000)
  //     return () => {
  //       clearTimeout(t)
  //     }
  //   }, [])

  return (
    //     <div className="playlist__item">
    //     <div className="playlist__track track">
    //       <div className="track__title">
    //         <div className="track__title-image">
    //           <ContentLoader>
    //           <rect x="0" y="0" width="100" height="1" />
    //           </ContentLoader>
    //         </div>
    //         <div className="track__title-text">
    //         <ContentLoader>
    //           <rect x="0" y="0" width="51" height="51" />
    //           </ContentLoader>
    //         </div>
    //       </div>
    //       <div className="track__author">
    //       <ContentLoader>
    //           <rect x="0" y="0" width="51" height="51" />
    //           </ContentLoader>
    //       </div>
    //       <div className="track__album">
    //       <ContentLoader>
    //           <rect x="0" y="0" width="51" height="51" />
    //           </ContentLoader>
    //       </div>
    //       <div className="track__time">
    //         <ContentLoader>
    //           <rect x="0" y="0" width="51" height="51" />
    //           </ContentLoader>
    //       </div>
    //     </div>
    //   </div>

    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref={`${Icons}#icon-note`} />
            </svg>
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href="http://">
              {props.title}
              <span className="track__title-span">{props.titleSpan}</span>
            </a>
          </div>
        </div>
        <div className="track__author">
          <a className="track__author-link" href="http://">
            {props.author}
          </a>
        </div>
        <div className="track__album">
          <a className="track__album-link" href="http://">
            {props.album}
          </a>
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref={`${Icons}#icon-like`} />
          </svg>
          <span className="track__time-text">{props.time}</span>
        </div>
      </div>
    </div>
  )
}

export default PlaylistItem
