import Icons from '../assets/icons/sprite.svg'

function TrackPlayLike() {
  return (
    <div className="track-play__like-dis">
      <div className="track-play__like _btn-icon">
        <svg className="track-play__like-svg" alt="like">
          <use xlinkHref={`${Icons}#icon-like`} />
        </svg>
      </div>
      <div className="track-play__dislike _btn-icon">
        <svg className="track-play__dislike-svg" alt="dislike">
          <use xlinkHref={`${Icons}#icon-dislike`} />
        </svg>
      </div>
    </div>
  )
}

export default TrackPlayLike
